/**
 * k6 Spike Test — Todo List App
 * Purpose: Simulate sudden traffic spikes (e.g., when a post goes viral).
 *          Tests how the app handles sudden burst of users from 0 to 100.
 *
 * Run: k6 run spike-test.js
 */

import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

const errorRate = new Rate('error_rate');

export const options = {
  stages: [
    { duration: '10s', target: 5   },  // Normal baseline
    { duration: '5s',  target: 100 },  // SUDDEN SPIKE! 0→100 in 5 seconds
    { duration: '30s', target: 100 },  // Hold the spike
    { duration: '5s',  target: 5   },  // Drop back down
    { duration: '20s', target: 5   },  // Recovery check
  ],
  thresholds: {
    http_req_duration: ['p(95)<5000'],
    error_rate: ['rate<0.20'],
  },
};

const BASE_URL = 'http://localhost:9090/todo-list';

export default function () {
  const res = http.get(`${BASE_URL}/todos`);

  const ok = check(res, {
    'App survived spike - Status 200': (r) => r.status === 200,
    'Response under 5s during spike': (r) => r.timings.duration < 5000,
  });

  errorRate.add(!ok);
  sleep(1);
}

export function handleSummary(data) {
  const avgDur = Math.round(data.metrics.http_req_duration.values.avg);
  const p95Dur = Math.round(data.metrics.http_req_duration.values['p(95)']);
  const total  = data.metrics.http_reqs.values.count;

  console.log('\n========== SPIKE TEST RESULTS ==========');
  console.log(`Total Requests    : ${total}`);
  console.log(`Avg Response Time : ${avgDur}ms`);
  console.log(`P95 Response Time : ${p95Dur}ms`);
  console.log('=========================================\n');
  return {};
}
