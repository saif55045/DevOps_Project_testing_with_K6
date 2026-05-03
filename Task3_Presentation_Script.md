# Task 3 — Presentation Script & Slide Deck
## DevOps Semester Project | BSSE 8th Semester
### Duration: 15 Minutes | Format: Recorded Group Presentation

---

> **How to use this:**
> - Copy each slide's content into **PowerPoint / Google Slides / Canva**
> - Use the **Speaker Notes** section when presenting
> - Assign slides to group members as suggested
> - Record your screen while presenting

---

## 🗂️ Slide Overview (15 min total)

| Slide | Topic | Time |
|-------|-------|------|
| 1 | Title Slide | 0:30 |
| 2 | Agenda | 0:30 |
| 3 | What is DevOps? | 1:00 |
| 4 | DevOps Lifecycle Diagram | 1:00 |
| 5 | Why Organizations Need DevOps | 1:00 |
| 6 | Tools We Covered (Overview) | 1:30 |
| 7 | Our CI/CD Project — Todo List App | 1:00 |
| 8 | CI/CD Architecture Diagram | 1:00 |
| 9 | Topic Explored: Performance Testing with k6 | 1:00 |
| 10 | k6 Test Types & Real Results | 1:00 |
| 11 | LIVE DEMO — k6 Running Tests | 3:00 |
| 12 | What's Missing in DevOps | 1:00 |
| 13 | Alternative Tools | 0:30 |
| 14 | Conclusion + Q&A | 1:00 |

---

## 📊 SLIDE 1 — Title Slide

### Slide Content:
```
DevOps: Knowledge, Current Needs & Demonstration

BSSE — 8th Semester | DevOps Course

Group Members:
  • Saif Ullah — 22F-3644
  • Farhan Akhtar — 22F-3682

CI/CD Repo  : github.com/saif55045/CP
k6 Repo     : github.com/saif55045/DevOps_Project_testing_with_K6
Date        : May 2026
```

### Design Tips:
- Dark background (navy/black gradient)
- Add a DevOps infinity loop icon or CI/CD pipeline image
- Keep it clean and minimal

---

## 📊 SLIDE 2 — Agenda

### Slide Content:
```
What We'll Cover Today

01  What is DevOps & Why It Matters
02  Tools We Studied This Semester
03  Our CI/CD Project: Todo List App
04  Topic Explored: Performance Testing with k6
05  LIVE DEMO — k6 in Action
06  What's Missing & Future Tools
```

### Speaker Notes:
> "Good [morning/afternoon]. Today we'll present our DevOps semester project. We'll start with a brief overview of DevOps, walk you through everything we studied, show you our working project, give a live demo, and finally discuss what areas of DevOps are still left to explore."

---

## 📊 SLIDE 3 — What is DevOps?

### Slide Content:
```
What is DevOps?

DevOps bridges the gap between Development and Operations

BEFORE DevOps:               AFTER DevOps:
• Dev writes code             • Shared responsibility
• Ops struggles to deploy     • Automated pipelines
• Slow releases               • Frequent, reliable releases
• Blame culture               • Collaborative culture

"Deliver software faster, safer, and at scale"
```

### Speaker Notes:
> "Before DevOps, development and operations teams worked in silos. Developers would write code and hand it off to operations, who would then struggle to deploy it. This caused slow releases and frequent failures. DevOps solves this by bringing both teams together with automation, shared responsibility, and continuous feedback."

---

## 📊 SLIDE 4 — DevOps Lifecycle (Diagram Slide)

### Slide Content:
```
The DevOps Lifecycle

[Draw or insert this cycle diagram:]

  PLAN → CODE → BUILD → TEST → RELEASE → DEPLOY → OPERATE → MONITOR
    ↑                                                              |
    |______________________ Continuous Feedback ____________________|

Each stage is automated — no manual steps!
```

### Design Tips:
- Use a circular/infinity loop diagram
- Color-code each stage (blue → green → orange)
- You can find free DevOps lifecycle images on Google Images or draw it in PowerPoint SmartArt

### Speaker Notes:
> "The DevOps lifecycle is a continuous loop. Code is written, automatically built and tested, then deployed and monitored — and feedback flows back to planning. Our Jenkins pipeline automates the Build, Test, and Deploy stages of this cycle."

---

## 📊 SLIDE 5 — Why Organizations Need DevOps

### Slide Content:
```
Why Organizations Need DevOps

Without DevOps              With DevOps
─────────────────────────────────────────
Months between releases  →  Daily releases
Manual, risky deploys    →  Automated pipelines
Slow bug fixes           →  Minutes to recover
Siloed teams             →  Shared ownership
Inconsistent envs        →  Containers (same everywhere)
No visibility            →  Real-time dashboards

Requirements for Adoption:
✅ Version Control (Git)   ✅ CI/CD Pipelines
✅ Automation Mindset      ✅ Monitoring & Alerting
✅ Cultural Shift           ✅ Security Built-in
```

### Speaker Notes:
> "Businesses that adopt DevOps release software up to 200 times more frequently than those that don't, with 3x lower failure rates. For an organization to adopt DevOps, they need version control, automated pipelines, a monitoring strategy, and — most importantly — a cultural shift where Dev and Ops share responsibility."

---

## 📊 SLIDE 6 — Tools We Covered This Semester

### Slide Content:
```
Our DevOps Journey — Tools Covered

🐧 Linux & Bash Scripting    →  Foundation of all DevOps servers
📦 GitHub                    →  Version control & collaboration
🐳 Docker                    →  Containerization
☸️  Kubernetes               →  Container orchestration & scaling
🏗️  Terraform + AWS          →  Infrastructure as Code (IaC)
🔧 Jenkins                   →  CI/CD pipeline automation
📊 Prometheus + Grafana      →  Monitoring & alerting
🌐 Apache Tomcat             →  Java application deployment
```

### Design Tips:
- Use tool logos next to each item (all available on Google)
- Use a timeline or grid layout

### Speaker Notes:
> "Our semester covered the entire DevOps stack. We started from the ground up with Linux — since every DevOps tool runs on Linux — then moved to version control with GitHub, packaging with Docker, orchestration with Kubernetes, cloud infrastructure with Terraform and AWS, CI/CD with Jenkins, and finally monitoring with Prometheus and Grafana."

---

## 📊 SLIDE 7 — Our Project: Todo List App

### Slide Content:
```
Our Project: Todo List Web Application

What it does:
• Add, complete, and delete tasks
• Priority levels: Low / Medium / High
• Filter by status: All / Pending / Completed
• Real-time stats dashboard
• Modern glassmorphism UI

Tech Stack:
• Backend:   Java Servlets + JSP
• Build:     Apache Maven
• Testing:   JUnit 5 (automated unit tests)
• Server:    Apache Tomcat 9
• CI/CD:     Jenkins Declarative Pipeline
• Code:      GitHub → github.com/saif55045/CP
```

### Speaker Notes:
> "Our project is a Java-based Todo List web application. But what makes it a DevOps project is not the app itself — it's the automated pipeline behind it. Every time we push code to GitHub, Jenkins automatically builds it, runs all tests, packages it, and deploys it to Tomcat without us doing anything manually."

---

## 📊 SLIDE 8 — Architecture & Pipeline Diagram

### Slide Content:
```
CI/CD Pipeline Architecture

┌─────────────┐    push     ┌──────────────┐
│  Developer  │ ──────────→ │    GitHub    │
│  (VS Code)  │             │  Repository  │
└─────────────┘             └──────┬───────┘
                                   │ SCM Poll (every 1 min)
                                   ↓
                          ┌─────────────────┐
                          │   Jenkins CI/CD  │
                          └────────┬────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              ↓                    ↓                    ↓
        [1. Checkout]        [2. Build]           [3. Test]
        git pull from        mvn clean            mvn test
        GitHub               compile              JUnit reports
              │
              ↓
        [4. Package]         [5. Deploy]
        mvn package  ──→    Tomcat Server
        (WAR file)          localhost:9090
                                   │
                                   ↓
                          ┌─────────────────┐
                          │  Live Web App   │
                          │ /todo-list/     │
                          └─────────────────┘

Monitoring: Prometheus scrapes Jenkins → Grafana Dashboard
```

### Design Tips:
- Redraw this as a proper flowchart in PowerPoint using shapes and arrows
- Use green arrows for success, red for failure paths

### Speaker Notes:
> "Here's our pipeline architecture. When a developer pushes code to GitHub, Jenkins detects the change automatically through SCM polling. It then runs 5 stages: checkout the code, compile it with Maven, run JUnit tests, package it as a WAR file, and finally deploy it to Tomcat. Prometheus monitors the Jenkins build metrics and Grafana displays them on a dashboard."

---

## 📊 SLIDE 9 — Topic Explored: Performance Testing with k6

### Slide Content:
```
Task 2: Performance Testing with k6

What is Performance Testing?
→ Tests how the system behaves under load — not just "is it correct?" but
  "is it fast enough? Can it handle real users?"

Why k6?
⚡ Written in Go — extremely fast, low memory usage
📝 Test scripts in JavaScript — developer friendly
🔄 CI/CD native — runs in Jenkins, GitHub Actions out of the box
🌍 Used by Netflix, Google, Microsoft, Grafana Labs
📊 Integrates with Grafana for real-time dashboards

Why this topic is trending:
→ 53% of users abandon pages that take more than 3 seconds to load
→ Modern CI/CD pipelines must catch performance regressions BEFORE production
→ k6 is the #1 fastest-growing performance testing tool (2024–2026)
```

### Speaker Notes:
> "Now we move to Task 2 — the topic we explored. We chose Performance Testing with k6, which is one of the most trending testing tools in the DevOps world right now. Unlike unit tests which check if code is correct, performance testing checks if the system is FAST ENOUGH for real users. k6 was built from the ground up for DevOps — it runs in pipelines, integrates with Grafana, and is trusted by Netflix and Google."

---

## 📊 SLIDE 10 — k6 Test Types & Real Results

### Slide Content:
```
We Implemented 4 Types of Performance Tests
Target: Todo List App at localhost:9090

┌─────────────┬──────────────────┬──────────┬───────────┬──────────┐
│ Test Type   │ Virtual Users    │ Requests │ Avg Resp  │ Errors   │
├─────────────┼──────────────────┼──────────┼───────────┼──────────┤
│ Smoke       │ 1 VU, 30s        │ 40       │ 6ms       │ 0% ✅    │
│ Load        │ 0→50 VUs, 3min   │ 4,260    │ 8ms       │ 0% ✅    │
│ Stress      │ 0→200 VUs, 2m10s │ 17,249   │ 153ms     │ 0% ✅    │
│ Spike       │ 5→100 VUs, 1m10s │ 3,530    │ 50ms      │ 0% ✅    │
└─────────────┴──────────────────┴──────────┴───────────┴──────────┘

Total: 25,039 requests — ZERO failures
Peak throughput: 132.51 requests/second
```

### Design Tips:
- Show this as a table in PowerPoint with green checkmarks
- Add a bar chart showing avg response time across tests

### Speaker Notes:
> "We ran 4 types of tests against our live Todo List app. The smoke test confirms the app is healthy. The load test simulates 50 real users — all passing with just 8ms average response. The stress test pushed to 200 users — still only 153ms average. And the spike test simulated a sudden viral traffic burst — the app handled it with P95 under 100ms. Total: 25,039 requests with zero failures."

---

## 📊 SLIDE 11 — LIVE DEMO — k6 in Action (3 minutes)

### This is a live terminal demo — NOT a slide

### Demo Script (exactly what to run):

**Step 1 — Show the GitHub repo (20 sec)**
```
1. Open browser → github.com/saif55045/DevOps_Project_testing_with_K6
2. Show the k6-tests/ folder structure
3. Open smoke-test.js briefly — show it's JavaScript
```

**Step 2 — Run the Smoke Test live (45 sec)**
```
1. Open terminal → navigate to project/k6-tests/
2. Type and run: k6 run smoke-test.js
3. Point out as it runs:
   - The VU count
   - The ✓ checkmarks showing all checks passing
   - The response time metrics at the end
```

**Step 3 — Run the Load Test (1:30)**
```
1. Type and run: k6 run load-test.js
2. Watch the stages ramp up in real-time (0→10→25→50 users)
3. Point to the progress bar showing virtual users increasing
4. At the end, highlight:
   - Total Requests: 4,260
   - Avg Response: 8ms
   - Failed Requests: 0
```

**Step 4 — Show findings document (30 sec)**
```
1. Open FINDINGS.md in the repo
2. Show the results table
3. Point to key finding: "132 requests/second under 200 users"
```

### Speaker Notes:
> "Let me show you k6 in action against our live Todo List app."
> "Here is our GitHub repository for this task — you can see the 4 test files."
> "I'll run the smoke test first — watch the checkmarks appear..."
> "Now the load test — notice the VU count ramping up from 0 to 50 users..."
> "Look at the results — 4,260 requests, zero failures, 8ms average response time. This app is fast."

---

## 📊 SLIDE 12 — What's Missing in DevOps

### Slide Content:
```
Gaps in Our DevOps Journey

❌ DevSecOps (Security)
   → No container image scanning (Trivy)
   → No secrets management (HashiCorp Vault)

❌ GitOps & Advanced Deployments
   → No Blue-Green or Canary deployments
   → No ArgoCD for Kubernetes GitOps

❌ Configuration Management
   → No Ansible for automated server setup

❌ Centralized Logging
   → No ELK Stack or Loki for log aggregation

❌ Artifact Management
   → No Nexus/Artifactory for versioned artifacts

✅ Performance Testing → COVERED with k6 (Task 2!)
```

### Speaker Notes:
> "Despite covering a wide range of tools, several important areas remain unexplored. The most critical gap is security — no container scanning or secrets management. In a real production environment, every Docker image should be scanned before deployment. However — one gap we DID fill through this project is performance testing. We explored k6, which was previously missing from our pipeline."

---

## 📊 SLIDE 13 — Alternative & Missing Tools

### Slide Content:
```
Tools to Fill the Gaps

Category            | What We Used      | What We're Missing
────────────────────────────────────────────────────────────
CI/CD               | Jenkins           | GitHub Actions, GitLab CI
Security (DevSecOps)| SonarQube         | Trivy, Vault, Snyk
Config Management   | —                 | Ansible, Puppet
GitOps              | —                 | ArgoCD, Flux
Logging             | —                 | ELK Stack, Loki
Artifact Mgmt       | —                 | Nexus, JFrog Artifactory
Deployment Strategy | Basic deploy      | Blue-Green, Canary
Perf. Testing       | ✅ k6 (Task 2)   | JMeter, Gatling
```

### Speaker Notes:
> "Here's the full gap analysis. Notice that Performance Testing, which was previously missing, is now covered — we implemented it in Task 2 with k6. The remaining critical gaps for a production-ready pipeline are: security scanning with Trivy, secrets management with HashiCorp Vault, and configuration management with Ansible."

---

## 📊 SLIDE 14 — Conclusion

### Slide Content:
```
Conclusion

What We Achieved This Semester:
✅ Full CI/CD pipeline: Code → Build → Test → Deploy
✅ Automated testing with JUnit in Jenkins
✅ Infrastructure as Code with Terraform on AWS
✅ Containerization with Docker & orchestration with K8s
✅ Real-time monitoring with Prometheus + Grafana
✅ Live Todo List app deployed on Tomcat

Task 2 — Topic Explored:
✅ Performance Testing with k6
   → 25,039 requests | 0 errors | 132 req/s peak throughput
   → 4 test types: Smoke, Load, Stress, Spike

Key Takeaway:
"DevOps is not a destination — it is a journey
 of continuous improvement."

CI/CD Repo  : github.com/saif55045/CP
k6 Repo     : github.com/saif55045/DevOps_Project_testing_with_K6

Thank you! Questions?
```

### Speaker Notes:
> "To summarize — this semester we went from Linux basics all the way to a fully automated CI/CD pipeline. And through Task 2, we explored Performance Testing with k6 — proving that our Todo List app can handle 200 concurrent users with zero failures. The gaps we identified give us a clear roadmap for what to learn next. Thank you — we are happy to take any questions."

---

## 🎯 Presentation Checklist

Before your presentation:
- [ ] Tomcat is running with the Todo List app at `localhost:9090`
- [ ] k6 is installed and working (`k6 version` in terminal)
- [ ] Terminal is open at `project/k6-tests/` folder
- [ ] Have k6 GitHub repo open: `github.com/saif55045/DevOps_Project_testing_with_K6`
- [ ] Have FINDINGS.md open to show results
- [ ] Start screen recording (OBS / Windows Game Bar: `Win + G`)
- [ ] Print Task 1 report (black & white, double-sided) → submit BEFORE starting
- [ ] All group members know their part of the slides

---

## 💡 Slide Design Recommendations

Use any of these free tools to build the slides:

| Tool | Link | Best For |
|------|------|---------|
| **Canva** | canva.com | Beautiful, professional templates |
| **Google Slides** | slides.google.com | Easy collaboration |
| **PowerPoint** | Microsoft Office | Standard, offline use |
| **Pitch.com** | pitch.com | Modern, clean design |

**Recommended theme:** Dark mode (navy/black background, white text, accent color teal or blue)

---

*Task 3 Presentation Guide — DevOps Course | BSSE 8th Semester | May 2026*
