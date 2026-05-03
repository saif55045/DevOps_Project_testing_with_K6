# 🚀 DevOps Project — Performance Testing with k6

**Course:** DevOps | **Program:** BSSE 8th Semester  
**Student:** Saif | **GitHub:** https://github.com/saif55045/DevOps_Project_testing_with_K6

---

## 📋 Project Overview

This project explores **Performance Testing** as a current and future DevOps testing need.  
We use **k6** — an open-source, developer-friendly load testing tool by Grafana Labs — to performance test a Java-based Todo List web application.

### Why Performance Testing?
- 53% of users abandon sites that take more than **3 seconds** to load
- CI/CD pipelines need **automated performance gates**, not just unit tests
- k6 is the **fastest growing** performance testing tool in the DevOps ecosystem (2024–2026)

---

## 📁 Project Structure

```
project/
├── README.md                        ← You are here
├── Task1_DevOps_Report.md           ← Task 1: Full DevOps Knowledge Report
├── Task3_Presentation_Script.md     ← Task 3: 15-min Presentation Script & Slides
└── k6-tests/
    ├── smoke-test.js                ← 1 user, 30s — sanity check
    ├── load-test.js                 ← 0→50 users — realistic traffic
    ├── stress-test.js               ← 0→200 users — find breaking point
    ├── spike-test.js                ← sudden burst 5→100 users
    ├── run-all-tests.sh             ← Run all tests at once
    ├── FINDINGS.md                  ← Task 2 findings & analysis
    └── k6-results/                  ← JSON output from test runs
```

---

## 🧪 Test Types

| Test | File | Virtual Users | Duration | Purpose |
|------|------|--------------|----------|---------|
| **Smoke** | `smoke-test.js` | 1 | 30s | Is the app alive? |
| **Load** | `load-test.js` | 0 → 50 | ~3 min | Normal daily traffic |
| **Stress** | `stress-test.js` | 0 → 200 | ~2 min | Find breaking point |
| **Spike** | `spike-test.js` | 5 → 100 → 5 | ~1.5 min | Sudden burst traffic |

---

## ⚙️ Prerequisites

### 1. Install k6
```powershell
# Windows (via winget)
winget install k6

# Or download MSI from:
# https://github.com/grafana/k6/releases
```

### 2. Start the Todo List App
The tests target the Todo List app running on Tomcat:
```
http://localhost:9090/todo-list/todos
```
Make sure Tomcat is running and the app is deployed before running tests.

---

## 🚀 Running the Tests

```bash
# Navigate to k6-tests folder
cd k6-tests

# ── Smoke Test (fastest, run after every deploy) ──
k6 run smoke-test.js

# ── Load Test (normal traffic simulation) ──
k6 run load-test.js

# ── Stress Test (find the breaking point) ──
k6 run stress-test.js

# ── Spike Test (sudden traffic burst) ──
k6 run spike-test.js

# ── Save results as JSON ──
k6 run --out json=k6-results/smoke.json smoke-test.js
```

---

## 📊 Sample Output

When you run a k6 test, you'll see real-time output like this:

```
          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: smoke-test.js
     output: -

  scenarios: (100.00%) 1 scenario, 1 max VUs, 1m0s max duration
           * default: 1 looping VUs for 30s

  ✓ ✅ Home page status is 200
  ✓ ✅ Home page loads under 2s
  ✓ ✅ Page contains Todo content
  ✓ ✅ Pending filter status is 200
  ✓ ✅ Add todo redirects (302)

  checks.........................: 100.00% ✓ 90   ✗ 0
  http_req_duration..............: avg=45ms  min=12ms  med=40ms  max=120ms  p(90)=80ms  p(95)=95ms
  http_reqs......................: 30    1.0/s
  vus............................: 1     min=1      max=1
  ✅ ALL THRESHOLDS PASSED
```

---

## 🔄 CI/CD Integration

Add this stage to your `Jenkinsfile` to run smoke tests **automatically after every deployment**:

```groovy
stage('Performance Test') {
    steps {
        echo '⚡ Running k6 performance smoke test...'
        bat 'k6 run k6-tests/smoke-test.js'
    }
    post {
        always {
            archiveArtifacts artifacts: 'k6-tests/k6-results/**', allowEmptyArchive: true
        }
    }
}
```

---

## 📄 Documents

| Document | Description |
|----------|-------------|
| [Task1_DevOps_Report.md](./Task1_DevOps_Report.md) | Full report on DevOps needs, what was covered, and what's missing |
| [k6-tests/FINDINGS.md](./k6-tests/FINDINGS.md) | Task 2 findings: k6 analysis, test results, and recommendations |
| [Task3_Presentation_Script.md](./Task3_Presentation_Script.md) | Slide-by-slide 15-min presentation script for Task 3 |

---

## 👤 Author

**Saif** — BSSE 8th Semester — DevOps Course  
University Project | May 2026
