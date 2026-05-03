# Task 2 — Performance Testing with k6
## Findings Document | DevOps Semester Project
**Student:** Saif | **BSSE 8th Semester** | **May 2026**  
**GitHub:** https://github.com/saif55045/DevOps_Project_testing_with_K6

---

## 1. Topic Overview

### What is Performance Testing?

Performance testing is a type of **non-functional testing** that evaluates how a system behaves under various load conditions. Unlike unit tests (which check if code is *correct*), performance tests check if the system is *fast enough*, *stable enough*, and *scalable enough* for real users.

**Key questions performance testing answers:**
- How many users can the app handle simultaneously?
- What is the average response time under normal load?
- At what point does the system start to degrade or fail?
- Can the app recover after a sudden traffic spike?

---

## 2. Why Performance Testing is a Current & Future Need

### Industry Trends (2024–2026)

| Trend | Impact on Performance Testing |
|-------|-------------------------------|
| **Cloud-native apps** | Apps must scale horizontally — performance under distributed load matters |
| **Microservices** | Each service boundary is a potential performance bottleneck |
| **CI/CD pipelines** | Performance tests must run automatically in pipelines, not just before release |
| **User expectations** | 53% of users abandon a page that takes more than 3 seconds to load (Google, 2024) |
| **Global scale** | Apps serve users across regions — latency must be tested at scale |

### Why k6 Specifically?

k6 is the **fastest growing performance testing tool** in the DevOps ecosystem:

- Written in **Go** — extremely fast and low resource usage
- Test scripts in **JavaScript** — developer-friendly
- **CI/CD native** — runs in Jenkins, GitHub Actions, GitLab CI out-of-the-box
- **Open source** — free, with enterprise cloud options
- Adopted by: **Netflix, Google, Microsoft, Grafana Labs**
- Integrates with **Grafana dashboards** for real-time visualization

---

## 3. Types of Performance Tests We Implemented

### 3.1 Smoke Test (`smoke-test.js`)
- **Purpose:** Sanity check — is the app even working?
- **Load:** 1 virtual user for 30 seconds
- **Goal:** All endpoints return 200, response < 2 seconds
- **When to run:** After every deployment in the CI/CD pipeline

### 3.2 Load Test (`load-test.js`)
- **Purpose:** Simulate realistic everyday traffic
- **Load:** Ramp from 0 → 50 virtual users over 3 minutes
- **Tests:** Browse todos, add todos, filter by status
- **Thresholds:** 95% of requests < 3 seconds, error rate < 5%
- **When to run:** Nightly in CI/CD or before releases

### 3.3 Stress Test (`stress-test.js`)
- **Purpose:** Find the application's breaking point
- **Load:** Ramp from 0 → 200 virtual users
- **Goal:** Identify at what load the app starts failing
- **When to run:** Before major releases or infrastructure changes

### 3.4 Spike Test (`spike-test.js`)
- **Purpose:** Simulate a sudden viral traffic burst
- **Load:** Jump from 5 → 100 users in just 5 seconds
- **Goal:** Test if the app can handle sudden unexpected load
- **When to run:** Before product launches or marketing campaigns

---

## 4. Endpoints Tested

Our Todo List app at `http://localhost:9090/todo-list` exposes:

| Endpoint | Method | Action | Tested |
|----------|--------|--------|--------|
| `/todos` | GET | Load all todos | ✅ |
| `/todos?filter=pending` | GET | Filter pending todos | ✅ |
| `/todos?filter=completed` | GET | Filter completed todos | ✅ |
| `/todos` POST `action=add` | POST | Add new todo | ✅ |
| `/todos` POST `action=toggle` | POST | Toggle completion | ✅ |
| `/todos` POST `action=delete` | POST | Delete todo | ✅ |

---

## 5. Test Results & Analysis

> ✅ All tests executed against the local Tomcat server (`http://localhost:9090/todo-list`).
> All 4 tests PASSED all thresholds with zero failed requests.

### 5.1 Smoke Test Results (1 VU, 30 seconds)
```
Total Requests   : 40
Failed Requests  : 0
Avg Response Time: 6ms
Max Response Time: 19ms
Iterations       : 8
Duration         : 32.3s
Status           : ✅ ALL CHECKS PASSED — App healthy
```

### 5.2 Load Test Results (0 → 50 Virtual Users, 3 minutes)
```
Total Requests   : 4,260
Failed Requests  : 0
Avg Response Time: 8ms
P95 Response Time: 24ms
Max Response Time: 86ms
Iterations       : 852
Duration         : 3m 02.2s
Error Rate       : 0%
Status           : ✅ ALL THRESHOLDS MET
```

### 5.3 Stress Test Results (0 → 200 Virtual Users, 2m10s)
```
Total Requests   : 17,249
Requests/Second  : 132.51 req/s
Avg Response Time: 153ms
P95 Response Time: 502ms
Max Response Time: 907ms
Iterations       : 17,249
Duration         : 2m 10.2s
Status           : ✅ PASSED — App handled 200 users, max response < 1s
```

### 5.4 Spike Test Results (5 → 100 → 5 Virtual Users, 1m10s)
```
Total Requests   : 3,530
Avg Response Time: 50ms
P95 Response Time: 96ms
Iterations       : 3,530
Duration         : 1m 10.8s
Status           : ✅ PASSED — App handled sudden burst with P95 under 100ms
```

---

## 6. Key Findings

### ✅ What the App Does Well
1. **Exceptional low latency** — Only **6ms avg** response time with 1 user, **8ms avg** with 50 concurrent users
2. **Zero errors across all tests** — 0 failed requests in smoke, load, and spike tests
3. **Handles 200 concurrent users** — Under stress, avg response was 153ms — well within acceptable limits
4. **Excellent spike resilience** — When traffic jumped from 5 to 100 users instantly, P95 stayed at just 96ms
5. **High throughput** — Sustained **132.51 requests/second** under 200 virtual users

### ⚠️ Areas for Improvement
1. **In-memory storage** — TodoService uses a Java `List`, not a database — data is lost on restart
2. **No load balancer** — Single Tomcat instance is a single point of failure at scale
3. **No CDN** — Static resources (CSS, JS) served directly from Tomcat adds unnecessary load
4. **No caching layer** — Every request hits the in-memory store directly

### 🔧 Recommended Fixes
| Issue | Fix |
|-------|-----|
| No database | Migrate from in-memory List to MySQL/PostgreSQL |
| Single instance | Add Nginx load balancer + multiple Tomcat instances |
| No caching | Add Redis cache for frequently read todos |
| No CDN | Serve static assets via Nginx or a CDN like Cloudfront |

---

## 7. Integration with CI/CD Pipeline

One of k6's most powerful features is **running in CI/CD pipelines**. Here's how to add smoke tests to our existing Jenkinsfile:

```groovy
stage('Performance Test') {
    steps {
        echo '⚡ Running k6 smoke test...'
        bat 'k6 run k6-tests/smoke-test.js'
    }
    post {
        always {
            // Archive results
            archiveArtifacts artifacts: 'k6-tests/k6-results/**', allowEmptyArchive: true
        }
    }
}
```

This ensures **every deployment is performance-tested automatically** — not just functionally tested.

---

## 8. Comparison: k6 vs Other Performance Testing Tools

| Feature | k6 | JMeter | Gatling | Locust |
|---------|----|--------|---------|--------|
| **Language** | JavaScript | XML/GUI | Scala | Python |
| **CI/CD friendly** | ✅ Native | ⚠️ Complex | ✅ Good | ✅ Good |
| **Resource usage** | 🟢 Very low | 🔴 High | 🟡 Medium | 🟡 Medium |
| **Learning curve** | 🟢 Easy | 🔴 Steep | 🟡 Medium | 🟢 Easy |
| **Real-time metrics** | ✅ Built-in | ⚠️ Plugin | ✅ Built-in | ✅ Built-in |
| **Grafana integration** | ✅ Native | ⚠️ Plugin | ⚠️ Plugin | ⚠️ Manual |

**k6 wins for DevOps** because it was built from the ground up for CI/CD pipelines and developer workflows.

---

## 9. Conclusion

Performance testing with k6 fills a critical gap in our DevOps pipeline. Our Todo List CI/CD project had automated **functional testing** (JUnit) in Jenkins, but lacked **non-functional testing** for performance.

After running all 4 k6 tests, the results are impressive:
- The app serves **4,260 requests** under 50 concurrent users with **zero failures**
- Even under **200 virtual users** (stress test), avg response was only **153ms**
- A sudden spike to **100 users** kept P95 at just **96ms**
- Throughput reached **132 requests/second** under full stress

By adding k6 to the pipeline:
- We can detect **performance regressions** before they reach production
- We have a real **performance baseline** to measure future improvements against
- Smoke tests can run **automatically after every Jenkins deployment**

This is exactly the shift-left approach modern DevOps demands — catching performance issues early in the pipeline, not after customers complain.

---

## References

1. k6 Official Documentation — https://k6.io/docs/
2. "State of Performance Testing 2024" — Grafana Labs
3. Google Web Performance Report — https://web.dev/performance/
4. k6 GitHub Repository — https://github.com/grafana/k6
5. "Performance Testing Guidance" — Microsoft Azure Documentation

---

*Task 2 Findings Document — DevOps Course | BSSE 8th Semester | May 2026*
