/**
 * k6 Smoke Test — Todo List App
 * Purpose: Quick sanity check. Verifies the app is UP and endpoints respond correctly.
 * Virtual Users: 1 | Duration: 30 seconds
 *
 * Run: k6 run smoke-test.js
 */

import http from 'k6/http';
import { check, sleep } from 'k6';
import { Rate } from 'k6/metrics';

// Custom metric: track error rate
const errorRate = new Rate('errors');

// Test configuration
export const options = {
  vus: 1,          // 1 virtual user
  duration: '30s', // run for 30 seconds
  thresholds: {
    // App must respond within 2 seconds
    http_req_duration: ['p(95)<2000'],
    // Error rate must be below 1%
    errors: ['rate<0.01'],
    // All requests must succeed
    http_req_failed: ['rate<0.01'],
  },
};

const BASE_URL = 'http://localhost:9090/todo-list';

export default function () {
  // ─── Test 1: Load the main Todo page ───
  const homePage = http.get(`${BASE_URL}/todos`);
  check(homePage, {
    '✅ Home page status is 200': (r) => r.status === 200,
    '✅ Home page loads under 2s': (r) => r.timings.duration < 2000,
    '✅ Page contains Todo content': (r) => r.body.includes('Todo'),
  }) || errorRate.add(1);

  sleep(1);

  // ─── Test 2: Filter by pending todos ───
  const pendingPage = http.get(`${BASE_URL}/todos?filter=pending`);
  check(pendingPage, {
    '✅ Pending filter status is 200': (r) => r.status === 200,
    '✅ Pending filter loads under 2s': (r) => r.timings.duration < 2000,
  }) || errorRate.add(1);

  sleep(1);

  // ─── Test 3: Filter by completed todos ───
  const completedPage = http.get(`${BASE_URL}/todos?filter=completed`);
  check(completedPage, {
    '✅ Completed filter status is 200': (r) => r.status === 200,
    '✅ Completed filter loads under 2s': (r) => r.timings.duration < 2000,
  }) || errorRate.add(1);

  sleep(1);

  // ─── Test 4: Add a new todo via POST ───
  const addTodo = http.post(`${BASE_URL}/todos`, {
    action: 'add',
    title: 'k6 Smoke Test Todo',
    description: 'Added by k6 smoke test',
    priority: 'HIGH',
  });
  check(addTodo, {
    '✅ Add todo redirects (302)': (r) => r.status === 200 || r.status === 302,
    '✅ Add todo responds under 2s': (r) => r.timings.duration < 2000,
  }) || errorRate.add(1);

  sleep(1);
}

// ─── Summary printed at end of test ───
export function handleSummary(data) {
  console.log('\n========== SMOKE TEST SUMMARY ==========');
  console.log(`Total Requests  : ${data.metrics.http_reqs.values.count}`);
  console.log(`Failed Requests : ${data.metrics.http_req_failed.values.passes}`);
  console.log(`Avg Response    : ${Math.round(data.metrics.http_req_duration.values.avg)}ms`);
  console.log(`Max Response    : ${Math.round(data.metrics.http_req_duration.values.max)}ms`);
  console.log('=========================================\n');
  return {};
}
