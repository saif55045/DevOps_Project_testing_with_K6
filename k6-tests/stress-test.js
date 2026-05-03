/**
 * k6 Stress Test — Todo List App
 * Purpose: Find the BREAKING POINT of the application.
 *          Push beyond normal capacity to see when it fails.
 *
 * Run: k6 run stress-test.js
 */

import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const errorRate = new Rate('error_rate');

// ─── Stress Test Configuration ────────────────────────────────────────────────
// We keep adding users until the app breaks
export const options = {
  stages: [
    { duration: '20s', target: 20  },  // Normal load
    { duration: '20s', target: 50  },  // Heavy load
    { duration: '20s', target: 100 },  // Stress: 100 users
    { duration: '20s', target: 150 },  // Beyond capacity
    { duration: '20s', target: 200 },  // Peak stress
    { duration: '30s', target: 0   },  // Recovery phase
  ],
  thresholds: {
    // We EXPECT some failures in stress test, so we set higher thresholds
    http_req_duration: ['p(95)<10000'], // 10s max at stress
    error_rate: ['rate<0.30'],          // Allow up to 30% errors under extreme stress
  },
};

const BASE_URL = 'http://localhost:9090/todo-list';

export default function () {
  // Simple GET request — most common under stress
  const res = http.get(`${BASE_URL}/todos`);

  const ok = check(res, {
    'Status is 200': (r) => r.status === 200,
    'Response under 10s': (r) => r.timings.duration < 10000,
  });

  errorRate.add(!ok);

  // Minimal sleep to maintain high pressure
  sleep(0.5);
}

export function handleSummary(data) {
  const avgDur = Math.round(data.metrics.http_req_duration.values.avg);
  const p95Dur = Math.round(data.metrics.http_req_duration.values['p(95)']);
  const maxDur = Math.round(data.metrics.http_req_duration.values.max);
  const total  = data.metrics.http_reqs.values.count;
  const rps    = data.metrics.http_reqs.values.rate.toFixed(2);

  console.log('\n========== STRESS TEST RESULTS ==========');
  console.log(`Total Requests    : ${total}`);
  console.log(`Requests/Second   : ${rps} req/s`);
  console.log(`Avg Response Time : ${avgDur}ms`);
  console.log(`P95 Response Time : ${p95Dur}ms`);
  console.log(`Max Response Time : ${maxDur}ms`);
  console.log('==========================================\n');
  return {};
}
