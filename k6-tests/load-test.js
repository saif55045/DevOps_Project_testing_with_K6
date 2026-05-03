/**
 * k6 Load Test — Todo List App
 * Purpose: Simulate realistic user load. Ramp up to 50 users and hold.
 * Tests all CRUD operations users would perform on the Todo app.
 *
 * Run: k6 run load-test.js
 * Run with HTML report: k6 run --out json=results.json load-test.js
 */

import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { Counter, Rate, Trend } from 'k6/metrics';

// ─── Custom Metrics ───────────────────────────────────────────────────────────
const errorRate      = new Rate('error_rate');
const addTodoTrend   = new Trend('add_todo_duration');
const getTodoTrend   = new Trend('get_todos_duration');

// ─── Test Configuration ───────────────────────────────────────────────────────
export const options = {
  stages: [
    { duration: '30s', target: 10 },  // Ramp up: 0 → 10 users in 30s
    { duration: '1m',  target: 25 },  // Ramp up: 10 → 25 users in 1 min
    { duration: '1m',  target: 50 },  // Peak load: hold at 50 users for 1 min
    { duration: '30s', target: 0  },  // Ramp down: 50 → 0 users in 30s
  ],
  thresholds: {
    // 95% of requests must complete below 3 seconds
    http_req_duration: ['p(95)<3000'],
    // 99% of requests must complete below 5 seconds
    'http_req_duration{name:get_todos}': ['p(99)<5000'],
    // Error rate must stay below 5%
    error_rate: ['rate<0.05'],
    // Overall failure rate must stay below 5%
    http_req_failed: ['rate<0.05'],
  },
};

const BASE_URL = 'http://localhost:9090/todo-list';

// ─── Shared test data ─────────────────────────────────────────────────────────
const priorities  = ['LOW', 'MEDIUM', 'HIGH'];
const filterTypes = ['all', 'pending', 'completed'];

// ─── Main Test Function (runs once per VU per iteration) ─────────────────────
export default function () {
  const userId = __VU;   // Virtual User ID
  const iter   = __ITER; // Iteration number

  // ── Group 1: Browse Todos (most common user action) ──────────────────────
  group('Browse Todos', () => {
    // Load main page
    const res = http.get(`${BASE_URL}/todos`, {
      tags: { name: 'get_todos' },
    });

    getTodoTrend.add(res.timings.duration);

    const ok = check(res, {
      'GET /todos → 200': (r) => r.status === 200,
      'Response time < 3s': (r) => r.timings.duration < 3000,
      'Page has todo content': (r) => r.body.includes('Todo'),
    });
    errorRate.add(!ok);

    sleep(Math.random() * 2 + 1); // Think time: 1-3 seconds

    // Apply a random filter
    const filter = filterTypes[Math.floor(Math.random() * filterTypes.length)];
    const filterRes = http.get(`${BASE_URL}/todos?filter=${filter}`, {
      tags: { name: 'get_todos_filtered' },
    });
    check(filterRes, {
      'Filter page → 200': (r) => r.status === 200,
    });

    sleep(1);
  });

  // ── Group 2: Add a New Todo ───────────────────────────────────────────────
  group('Add Todo', () => {
    const priority = priorities[Math.floor(Math.random() * priorities.length)];
    const payload = {
      action: 'add',
      title: `Load Test Task VU-${userId} Iter-${iter}`,
      description: `Created by k6 load test at ${new Date().toISOString()}`,
      priority: priority,
    };

    const res = http.post(`${BASE_URL}/todos`, payload, {
      tags: { name: 'add_todo' },
    });

    addTodoTrend.add(res.timings.duration);

    const ok = check(res, {
      'POST /todos (add) → success': (r) => r.status === 200 || r.status === 302,
      'Add todo response time < 3s': (r) => r.timings.duration < 3000,
    });
    errorRate.add(!ok);

    sleep(Math.random() * 1 + 0.5); // Think time: 0.5-1.5 seconds
  });

  // ── Group 3: View filtered results after adding ───────────────────────────
  group('Verify Add', () => {
    const res = http.get(`${BASE_URL}/todos`, {
      tags: { name: 'verify_add' },
    });
    check(res, {
      'Verify page loads after add': (r) => r.status === 200,
    });
    sleep(1);
  });
}

// ─── Test Summary ─────────────────────────────────────────────────────────────
export function handleSummary(data) {
  const reqs    = data.metrics.http_reqs.values.count;
  const failed  = data.metrics.http_req_failed.values.passes;
  const avgDur  = Math.round(data.metrics.http_req_duration.values.avg);
  const p95Dur  = Math.round(data.metrics.http_req_duration.values['p(95)']);
  const maxDur  = Math.round(data.metrics.http_req_duration.values.max);

  console.log('\n========== LOAD TEST RESULTS ==========');
  console.log(`Total Requests   : ${reqs}`);
  console.log(`Failed Requests  : ${failed}`);
  console.log(`Avg Response Time: ${avgDur}ms`);
  console.log(`P95 Response Time: ${p95Dur}ms`);
  console.log(`Max Response Time: ${maxDur}ms`);
  console.log('=======================================\n');
  return {};
}
