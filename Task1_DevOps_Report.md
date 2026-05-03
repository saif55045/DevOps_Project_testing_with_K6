# DevOps: Knowledge, Needs, and the Road Ahead
## Task 1 Report — Semester Project

**Course:** DevOps  
**Program:** BSSE — 8th Semester  
**Students:**
- Saif Ullah — Roll No. 22F-3644
- Farhan Akhtar — Roll No. 22F-3682

**GitHub Repositories:**
- CI/CD Project: https://github.com/saif55045/CP
- Performance Testing (Task 2): https://github.com/saif55045/DevOps_Project_testing_with_K6

**Date:** May 2026

---

## Table of Contents

1. [Introduction to DevOps](#1-introduction-to-devops)
2. [Why Organizations Need DevOps](#2-why-organizations-need-devops)
3. [What We Have Covered This Semester](#3-what-we-have-covered-this-semester)
   - 3.1 Linux & Bash Scripting
   - 3.2 GitHub & Version Control
   - 3.3 Docker & Containerization
   - 3.4 Kubernetes & Container Orchestration
   - 3.5 Terraform & Infrastructure as Code
   - 3.6 AWS Cloud Services
   - 3.7 Jenkins & CI/CD Pipelines
   - 3.8 Prometheus & Grafana (Monitoring)
   - 3.9 Apache Tomcat (Deployment)
4. [Our Semester Project — Todo List CI/CD App](#4-our-semester-project)
5. [Task 2: Topic Explored — Performance Testing with k6](#5-task-2-performance-testing-with-k6)
6. [What Is Missing — Gaps in Our DevOps Journey](#6-what-is-missing)
7. [Alternative Tools and Frameworks](#7-alternative-tools-and-frameworks)
8. [Conclusion](#8-conclusion)

---

## 1. Introduction to DevOps

**DevOps** is a cultural and technical movement that bridges the gap between **software development (Dev)** and **IT operations (Ops)**. Before DevOps, development teams would write code and "throw it over the wall" to operations teams, who would then struggle to deploy and maintain it. This disconnect caused slow releases, frequent failures, and blame-shifting between teams.

DevOps solves this by bringing both teams together through:
- **Shared responsibility** for the entire software lifecycle
- **Automation** of repetitive tasks (building, testing, deploying)
- **Continuous feedback loops** to catch problems early
- **A culture of collaboration**, transparency, and learning from failures

### The DevOps Lifecycle

```
Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
  ↑___________________________________________________|
                  (Continuous Feedback)
```

The goal is to make this loop as fast and reliable as possible — enabling teams to ship software **frequently, safely, and at scale**.

---

## 2. Why Organizations Need DevOps

Modern software delivery is no longer about releasing a product once a year. Users expect:
- Frequent updates with new features
- Zero downtime
- Fast bug fixes
- Consistent performance

Without DevOps, organizations face serious challenges:

| Problem | Without DevOps | With DevOps |
|---------|---------------|-------------|
| **Release Speed** | Months between releases | Multiple releases per day |
| **Failure Rate** | High — untested, manual deployments | Low — automated testing + pipelines |
| **Recovery Time** | Hours or days | Minutes |
| **Collaboration** | Siloed teams, blame culture | Shared ownership, blameless culture |
| **Infrastructure** | Manual server setup, inconsistent environments | Automated, reproducible environments |
| **Visibility** | No insight into system health | Real-time dashboards and alerts |

### Business Benefits of Adopting DevOps

1. **Faster Time to Market** — Automated pipelines eliminate manual bottlenecks.
2. **Higher Quality** — Continuous testing catches bugs before they reach production.
3. **Reduced Risk** — Smaller, frequent releases are easier to roll back if something fails.
4. **Cost Efficiency** — Infrastructure automation reduces manual labor and human error.
5. **Scalability** — Cloud + container orchestration allows systems to scale on demand.
6. **Customer Satisfaction** — Faster bug fixes and feature delivery improve user experience.

### Requirements for Adopting DevOps in an Organization

For a successful DevOps adoption, an organization needs:

- ✅ **Cultural shift** — Break down silos between Dev and Ops teams
- ✅ **Executive buy-in** — Leadership must support the transformation
- ✅ **Automation mindset** — Automate everything that can be automated
- ✅ **Version control** — All code, config, and infrastructure must be in Git
- ✅ **CI/CD pipelines** — Automated build, test, and deploy workflows
- ✅ **Monitoring and alerting** — Proactive observability over reactive firefighting
- ✅ **Security integration (DevSecOps)** — Security must be built in, not bolted on
- ✅ **Documented processes** — Runbooks, postmortems, and knowledge sharing

---

## 3. What We Have Covered This Semester

### 3.1 Linux & Bash Scripting

**What is it?**  
Linux is the operating system powering the vast majority of servers, cloud infrastructure, and containers worldwide. Bash (Bourne Again Shell) is the scripting language used to automate tasks on Linux systems.

**What we learned:**
- Navigating the filesystem (`ls`, `cd`, `pwd`, `mkdir`, `rm`)
- File permissions (`chmod`, `chown`)
- Process management (`ps`, `kill`, `top`)
- Networking commands (`ping`, `curl`, `netstat`, `ssh`)
- Writing Bash scripts for automation (loops, conditionals, functions)
- Scheduling tasks with `cron`

**Why it matters for DevOps:**  
Every DevOps tool — Jenkins, Docker, Kubernetes, Terraform — runs on Linux. Without Linux proficiency, you cannot effectively manage servers, debug pipelines, or write automation scripts. Bash scripting is the glue that holds DevOps workflows together.

---

### 3.2 GitHub & Version Control

**What is it?**  
Git is a distributed version control system. GitHub is a cloud platform for hosting Git repositories and collaborating on code.

**What we learned:**
- Core Git workflow (`init`, `add`, `commit`, `push`, `pull`)
- Branching strategies (`feature`, `develop`, `main` branches)
- Pull Requests and code review workflows
- GitHub Actions (basic awareness)
- Connecting repositories to Jenkins for CI/CD triggers
- Using `.gitignore` to exclude build artifacts

**Why it matters for DevOps:**  
Version control is the foundation of the entire DevOps pipeline. Every automated build, test, and deployment starts with a Git commit. "If it's not in Git, it doesn't exist" — this principle applies to code, configs, and infrastructure.

**Our Project:** Source code is hosted at `https://github.com/saif55045/CP.git` with Jenkins polling for changes automatically.

---

### 3.3 Docker & Containerization

**What is it?**  
Docker packages applications and their dependencies into **containers** — lightweight, portable, isolated units that run consistently anywhere.

**What we learned:**
- Writing `Dockerfile` to containerize applications
- Building and tagging Docker images
- Running containers (`docker run`, `docker exec`, `docker logs`)
- Docker networking and volumes
- Docker Hub for image storage
- Docker Compose for multi-container applications

**Why it matters for DevOps:**  
Containers solve the classic "it works on my machine" problem. A Docker container bundles the app + its runtime + dependencies, ensuring identical behavior in development, testing, and production. Containers are the deployment unit of the modern cloud.

**Key Concept:** Containers are to DevOps what assembly lines were to manufacturing — they standardize the unit of work and enable mass automation.

---

### 3.4 Kubernetes & Container Orchestration

**What is it?**  
Kubernetes (K8s) is an open-source system for automatically deploying, scaling, and managing containerized applications across clusters of machines.

**What we learned:**
- Core Kubernetes objects: Pods, Deployments, Services, ConfigMaps, Secrets
- `kubectl` CLI commands
- Deploying applications to a Kubernetes cluster
- Service types: ClusterIP, NodePort, LoadBalancer
- Scaling applications with `kubectl scale`
- Namespaces for environment isolation

**Why it matters for DevOps:**  
Docker runs one container. Kubernetes runs thousands. When an application needs to serve millions of users, Kubernetes handles load balancing, auto-scaling, self-healing (restarting failed pods), and zero-downtime rolling deployments automatically.

---

### 3.5 Terraform & Infrastructure as Code (IaC)

**What is it?**  
Terraform is a tool that lets you define cloud infrastructure (servers, networks, databases) in code (`.tf` files) and provision it automatically.

**What we learned:**
- Writing Terraform configuration files (`.tf`)
- Terraform workflow: `init` → `plan` → `apply` → `destroy`
- Provisioning AWS resources: EC2 instances, VPCs, Security Groups, Subnets
- State management (`terraform.tfstate`)
- Using modules for reusable infrastructure components
- Remote state with S3 backend

**Why it matters for DevOps:**  
Manual server setup is error-prone and impossible to reproduce exactly. Terraform makes infrastructure reproducible, version-controlled, and reviewable — just like application code. This is **Infrastructure as Code (IaC)**, a core DevOps principle.

**Our Work:** We provisioned a complete AWS VPC with public/private subnets, bastion host, and EC2 instances using Terraform.

---

### 3.6 AWS Cloud Services

**What is it?**  
Amazon Web Services (AWS) is the world's leading cloud platform, offering 200+ services for compute, storage, networking, databases, and more.

**What we learned:**
- **EC2** — Virtual machines in the cloud
- **VPC** — Virtual private networks, subnets, routing
- **Security Groups** — Firewall rules for EC2 instances
- **IAM** — Identity and Access Management (users, roles, policies)
- **S3** — Object storage for files and Terraform state
- **ECR** — Elastic Container Registry for Docker images
- **SSH key pairs** — Secure access to EC2 instances
- **Bastion host pattern** — Secure access to private subnets

**Why it matters for DevOps:**  
The cloud is where modern applications live. AWS skills allow teams to provision scalable, globally available infrastructure on demand — a key enabler of the "Deploy" and "Operate" phases of DevOps.

---

### 3.7 Jenkins & CI/CD Pipelines

**What is it?**  
Jenkins is an open-source automation server used to build Continuous Integration and Continuous Delivery (CI/CD) pipelines.

**What we learned:**
- Installing and configuring Jenkins
- Installing plugins (Maven, Git, Deploy to Container, Pipeline)
- Writing **Declarative Jenkinsfiles** with multiple stages
- Configuring tools (JDK, Maven) in Jenkins Global Tool Configuration
- Managing credentials securely in Jenkins
- Setting up SCM polling for automatic pipeline triggers
- Publishing JUnit test reports
- Deploying WAR files to Tomcat via the Deploy plugin
- **SonarQube integration** for static code analysis
- Shared Groovy Libraries for reusable pipeline code

**Our Jenkinsfile Stages:**
```
Checkout → Build (mvn compile) → Test (mvn test) → Package (WAR) → Deploy to Tomcat
```

**Why it matters for DevOps:**  
Jenkins is the engine of the CI/CD pipeline. Every time a developer pushes code to GitHub, Jenkins automatically validates and deploys it — turning a manual, error-prone process into a reliable, repeatable automation.

---

### 3.8 Prometheus & Grafana (Monitoring & Observability)

**What is it?**  
- **Prometheus** — An open-source time-series database and monitoring system that scrapes metrics from applications and infrastructure.
- **Grafana** — A visualization platform for creating dashboards from Prometheus metrics.

**What we learned:**
- Setting up Prometheus to scrape Jenkins metrics
- Configuring `prometheus.yml` with scrape targets
- Writing Grafana dashboards with panels for:
  - Build success/failure counts
  - Build duration trends
  - Pipeline stage performance
- Configuring **alert rules** in Grafana (e.g., email alert on build failure)
- Understanding labels, queries (PromQL), and time-series data

**Why it matters for DevOps:**  
"You can't improve what you can't measure." Monitoring closes the feedback loop in DevOps. Without observability, teams operate blindly — they only discover problems after users complain. Prometheus + Grafana provide real-time insight into system health and pipeline performance.

---

### 3.9 Apache Tomcat (Application Deployment)

**What is it?**  
Apache Tomcat is an open-source Java web server and servlet container used to host Java web applications packaged as WAR files.

**What we learned:**
- Installing and configuring Tomcat
- Configuring the Tomcat Manager for remote deployment
- Deploying `.war` files manually and via Jenkins
- Managing Tomcat users and roles (`tomcat-users.xml`)
- Configuring ports and virtual hosts

**Why it matters for DevOps:**  
Tomcat is the runtime environment for Java web applications. Understanding the deployment target is essential for building accurate CI/CD pipelines. Our Jenkins pipeline automatically deploys the Todo List app to Tomcat on every successful build.

---

## 4. Our Semester Project

**Project:** Todo List Web Application with Full CI/CD Pipeline

**Tech Stack:**
- Backend: Java Servlets + JSP
- Build: Apache Maven
- Testing: JUnit 5
- Server: Apache Tomcat 9
- CI/CD: Jenkins Declarative Pipeline
- Source Control: GitHub

**Architecture:**
```
Developer pushes code
        ↓
    GitHub (SCM)
        ↓ (Jenkins polls every minute)
    Jenkins Pipeline
        ↓
  [Checkout] → [Build] → [Test] → [Package] → [Deploy]
        ↓                   ↓                      ↓
   Source code          JUnit Reports          Tomcat Server
   from GitHub          (Pass/Fail)           (Live App WAR)
```

**What this project demonstrates:**
- ✅ End-to-end CI/CD pipeline from commit to deployment
- ✅ Automated testing with JUnit integrated into the pipeline
- ✅ Real deployment to a running Tomcat server
- ✅ Version-controlled source code on GitHub
- ✅ Infrastructure managed through a Declarative Jenkinsfile

---

## 5. Task 2: Performance Testing with k6

> **This is the topic we explored in depth for Task 2 of this project.**
> **GitHub:** https://github.com/saif55045/DevOps_Project_testing_with_K6

### 5.1 What is Performance Testing?

Performance testing is a type of **non-functional testing** that evaluates how a system behaves under various load conditions. Unlike unit tests — which check if code is *functionally correct* — performance tests answer a completely different set of questions:

- How fast does the application respond to users?
- How many users can it handle simultaneously before slowing down?
- At what point does the system break or become unavailable?
- Can it recover quickly after a sudden surge of traffic?

Without performance testing, teams often discover issues **after** users are affected — when it is too late. A single slow deployment can cause user abandonment, lost revenue, and reputational damage. According to Google, **53% of mobile users abandon a page that takes more than 3 seconds to load**.

Performance testing is a critical gap in most CI/CD pipelines because it is easy to add unit tests but harder to test system-level behavior under realistic load.

---

### 5.2 Why k6 is a Current and Future Need

**k6** is an open-source, developer-friendly load testing tool built by **Grafana Labs**. It was designed specifically for the modern DevOps workflow:

| Feature | Details |
|---------|---------|
| **Language** | Test scripts are written in JavaScript — familiar to most developers |
| **Performance** | Built in Go — extremely fast, handles thousands of VUs with low CPU/memory |
| **CI/CD Native** | Runs in Jenkins, GitHub Actions, GitLab CI without any configuration overhead |
| **Grafana Integration** | Results stream directly to Grafana dashboards in real-time |
| **Open Source** | Free, with enterprise cloud options via Grafana Cloud |
| **Adoption** | Used by Netflix, Google, Microsoft, and Grafana Labs themselves |

**Why k6 is trending in 2024–2026:**
- The shift to **cloud-native microservices** means every service boundary is a performance risk
- **CI/CD pipelines** now need performance gates — not just unit test gates
- k6 is the **#1 fastest-growing performance testing tool** in the DevOps community
- k6 integrates natively with **Prometheus** and **Grafana** — tools already in our stack

---

### 5.3 Types of Performance Tests We Implemented

We implemented 4 types of performance tests against the Todo List app (`http://localhost:9090/todo-list`):

#### Smoke Test (`smoke-test.js`)
- **Virtual Users:** 1 VU
- **Duration:** 30 seconds
- **Purpose:** Sanity check — verify the app responds correctly after every deployment
- **When to run:** After every Jenkins deployment (automated gate)
- **Thresholds:** Response < 2s, error rate < 1%

#### Load Test (`load-test.js`)
- **Virtual Users:** 0 → 10 → 25 → 50 VUs (ramp-up stages)
- **Duration:** ~3 minutes
- **Purpose:** Simulate realistic everyday user traffic
- **Tests:** Browse todos (GET), filter by status, add new todos (POST)
- **Thresholds:** P95 response < 3s, error rate < 5%

#### Stress Test (`stress-test.js`)
- **Virtual Users:** 0 → 20 → 50 → 100 → 150 → 200 VUs
- **Duration:** ~2m10s
- **Purpose:** Push beyond normal capacity to find the breaking point
- **Goal:** Identify the maximum load the app can sustain
- **Thresholds:** P95 response < 10s (stress tolerates higher latency)

#### Spike Test (`spike-test.js`)
- **Virtual Users:** 5 → 100 in 5 seconds, then back to 5
- **Duration:** ~1m10s
- **Purpose:** Simulate a sudden viral traffic burst — e.g., a news article links to the app
- **Goal:** Check if the app crashes or recovers gracefully under sudden load

---

### 5.4 Real Test Results

All tests were executed against the local Tomcat server. **Every test passed all thresholds with zero failed requests.**

| Test | Total Requests | Avg Response | P95 Response | Max Response | Errors |
|------|---------------|-------------|-------------|-------------|--------|
| **Smoke** (1 VU, 30s) | 40 | 6ms | — | 19ms | 0% ✅ |
| **Load** (0→50 VUs, 3min) | 4,260 | 8ms | 24ms | 86ms | 0% ✅ |
| **Stress** (0→200 VUs, 2m10s) | 17,249 | 153ms | 502ms | 907ms | 0% ✅ |
| **Spike** (5→100 VUs, 1m10s) | 3,530 | 50ms | 96ms | — | 0% ✅ |

**Total requests across all tests: 25,039 — with ZERO failures.**  
**Peak throughput under stress: 132.51 requests/second.**

---

### 5.5 Key Findings

**What the app does well:**
- Exceptional low latency under normal load — only **6ms avg** with 1 user, **8ms avg** with 50 concurrent users
- Handles **200 concurrent users** with avg response of only 153ms
- Survived a sudden spike to 100 users with P95 under **96ms**
- Zero errors across all test runs

**Areas for improvement:**
- App uses **in-memory storage** (a Java List) — a real database (MySQL/PostgreSQL) would improve reliability
- No **load balancer** — a single Tomcat instance is a single point of failure
- No **caching layer** — Redis would reduce database pressure at scale

### 5.6 Integration with CI/CD Pipeline

One of k6's most powerful features is running **automatically inside Jenkins**. Adding a smoke test stage ensures every deployment is performance-tested, not just functionally tested:

```groovy
stage('Performance Test') {
    steps {
        echo '⚡ Running k6 smoke test...'
        bat 'k6 run k6-tests/smoke-test.js'
    }
}
```

This implements the **shift-left** approach — catching performance regressions early in the pipeline before they reach production users.

---

## 6. What Is Missing — Gaps in Our DevOps Journey

Despite covering a wide range of DevOps tools, several important areas were not fully explored. The table below lists all identified gaps, including those being explored by other course groups:

| # | Gap Area | Missing Tools | Status |
|---|----------|--------------|--------|
| 1 | **Security (DevSecOps)** | Trivy, Snyk, HashiCorp Vault, OWASP ZAP | Being explored by a classmate group |
| 2 | **GitOps (ArgoCD)** | ArgoCD — Git-driven K8s deployments | Being explored by a classmate group |
| 3 | **GitOps (Flux CD)** | Flux CD — Kubernetes GitOps operator | Being explored by a classmate group |
| 4 | **Service Mesh (Istio & Kiali)** | Istio, Kiali — traffic management, mTLS, observability | Being explored by a classmate group |
| 5 | **Autonomous Ops / AIOps** | AI-driven operations, self-healing systems | Being explored by a classmate group |
| 6 | **Performance Testing** | k6, JMeter, Gatling | ✅ **Explored in our Task 2 (see Section 5)** |
| 7 | **Configuration Management** | Ansible, Chef, Puppet | Not yet covered |
| 8 | **Centralized Logging** | ELK Stack, Loki + Grafana | Not yet covered |
| 9 | **Artifact Management** | Nexus Repository, JFrog Artifactory | Not yet covered |
| 10 | **Advanced Kubernetes** | Helm Charts, HPA, RBAC, Persistent Volumes | Not yet covered |

### Brief Description of Each Gap

**6.1 Security (DevSecOps)** — Security scanning is missing from our pipeline. In production, every Docker image should be scanned for vulnerabilities (Trivy), dependencies checked for CVEs (OWASP), and secrets managed securely (HashiCorp Vault). *(Topic being explored by a classmate group.)*

**6.2 GitOps with ArgoCD** — ArgoCD enables Kubernetes deployments to be driven entirely by Git state. Any change to a Git repo is automatically synced to the cluster. *(Topic being explored by a classmate group.)*

**6.3 GitOps with Flux CD** — Similar to ArgoCD, Flux CD is a lightweight GitOps operator for Kubernetes. *(Topic being explored by a classmate group.)*

**6.4 Service Mesh with Istio & Kiali** — Istio manages traffic between microservices with features like mTLS, circuit breaking, and observability. Kiali provides a visual dashboard for the service mesh. *(Topic being explored by a classmate group.)*

**6.5 Autonomous Ops / AIOps** — Using AI/ML to automate operational decisions — predicting failures, auto-scaling, and self-healing systems. *(Topic being explored by a classmate group.)*

**6.6 Performance Testing with k6** — Covered in our Task 2. See Section 5 for the full exploration and real test results.

**6.7 Configuration Management** — Tools like Ansible automate server setup, software installation, and configuration across fleets of machines using simple YAML playbooks.

**6.8 Centralized Logging** — We monitor metrics (Prometheus + Grafana) but have no log aggregation. The ELK Stack (Elasticsearch, Logstash, Kibana) or Loki would fill this gap.

**6.9 Artifact Management** — No versioned artifact store exists. Nexus Repository or JFrog Artifactory would store and version all build artifacts (JARs, WARs, Docker images).

**6.10 Advanced Kubernetes** — Helm Charts, Horizontal Pod Autoscaling, Role-Based Access Control (RBAC), and Persistent Volumes were not explored.

---

## 7. Alternative Tools and Frameworks

The following tools can complement or replace what we used, filling the identified gaps:

### 7.1 Performance Testing Tools (Our Task 2 Topic)

| Tool | Language | CI/CD Friendly | Best For |
|------|----------|---------------|----------|
| **k6** ✅ *(used)* | JavaScript | Native | Modern DevOps pipelines, Grafana integration |
| **JMeter** | XML/GUI | Complex setup | Legacy enterprise, GUI-based testing |
| **Gatling** | Scala | Good | High-performance, detailed HTML reports |
| **Locust** | Python | Good | Python teams, simple scripting |

> **k6 is the recommended tool** — it was built for CI/CD pipelines, integrates natively with Grafana, and is adopted by Netflix, Google, and Microsoft.

### 7.2 CI/CD Alternatives to Jenkins

| Tool | Type | Key Advantage |
|------|------|--------------|
| **GitHub Actions** | Cloud-native | Native GitHub integration, no server needed |
| **GitLab CI/CD** | Cloud-native | Built into GitLab, powerful pipeline syntax |
| **CircleCI** | Cloud-native | Fast, parallelism built-in |
| **Azure DevOps Pipelines** | Cloud-native | Deep Microsoft/Azure ecosystem integration |

### 7.3 GitOps Tools

| Tool | Purpose |
|------|---------|
| **ArgoCD** | Continuous delivery for Kubernetes using Git as source of truth |
| **Flux CD** | Lightweight GitOps operator for Kubernetes |

### 7.4 Security Tools (DevSecOps)

| Tool | Purpose |
|------|---------|
| **Trivy** | Docker image vulnerability scanner |
| **Snyk** | Dependency and container security |
| **OWASP ZAP** | Dynamic Application Security Testing (DAST) |
| **HashiCorp Vault** | Secrets management — no more hardcoded passwords |

### 7.5 Configuration Management

| Tool | Language | Use Case |
|------|----------|---------|
| **Ansible** | YAML Playbooks | Agentless, SSH-based server automation |
| **Chef** | Ruby DSL | Policy-based configuration management |
| **Puppet** | Puppet DSL | Declarative system configuration at scale |

### 7.6 Service Mesh

| Tool | Purpose |
|------|---------|
| **Istio + Kiali** | Full-featured service mesh: traffic management, mTLS, observability |
| **Linkerd** | Lightweight service mesh for Kubernetes |

### 7.7 Centralized Logging

| Stack | Components | Use Case |
|-------|-----------|---------|
| **ELK Stack** | Elasticsearch + Logstash + Kibana | Full-featured log search and visualization |
| **PLG Stack** | Promtail + Loki + Grafana | Lightweight, integrates with our existing Grafana |

### 7.8 Artifact Management

| Tool | Purpose |
|------|---------|
| **Nexus Repository** | Host Maven, npm, Docker artifacts privately |
| **JFrog Artifactory** | Enterprise-grade artifact management |

---

## 8. Conclusion

This semester has provided a comprehensive foundation in DevOps practices and tooling. Starting from the basics of **Linux** and **Bash scripting**, we progressed through the full DevOps toolchain — versioning code with **GitHub**, containerizing applications with **Docker**, orchestrating at scale with **Kubernetes**, automating infrastructure with **Terraform** on **AWS**, building CI/CD pipelines in **Jenkins**, and monitoring systems with **Prometheus and Grafana**.

Our **Todo List CI/CD project** demonstrates these principles working together: a developer commits code to GitHub, Jenkins automatically detects the change, runs tests, packages the application, and deploys it to Tomcat — all without manual intervention.

For **Task 2**, we explored **Performance Testing with k6** — a critical gap in our existing pipeline. Running 4 types of tests (Smoke, Load, Stress, Spike) against our live Todo List app, we processed **25,039 requests with zero failures**, sustained **132 requests/second** under 200 concurrent users, and established a performance baseline for the application.

The DevOps landscape is vast. Other identified gaps — **DevSecOps** (Trivy, Vault), **GitOps** (ArgoCD, Flux CD), **Service Mesh** (Istio/Kiali), **Autonomous Ops**, **Configuration Management** (Ansible), and **Centralized Logging** (ELK) — are being explored by classmate groups, together forming a comprehensive view of the full DevOps ecosystem.

DevOps is not a destination — it is a journey of **continuous improvement**, mirroring the very pipelines it creates.

---

### References

1. Humble, J., & Farley, D. (2010). *Continuous Delivery*. Addison-Wesley.
2. Kim, G., Humble, J., Debois, P., & Willis, J. (2016). *The DevOps Handbook*. IT Revolution Press.
3. k6 Official Documentation — https://k6.io/docs/
4. Jenkins Documentation — https://www.jenkins.io/doc/
5. Kubernetes Documentation — https://kubernetes.io/docs/
6. Terraform by HashiCorp — https://developer.hashicorp.com/terraform
7. Prometheus Documentation — https://prometheus.io/docs/
8. AWS Documentation — https://docs.aws.amazon.com/
9. Docker Documentation — https://docs.docker.com/

---

*Submitted for DevOps Course — BSSE 8th Semester | May 2026*  
*Saif Ullah (22F-3644) | Farhan Akhtar (22F-3682)*
