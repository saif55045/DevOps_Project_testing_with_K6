# DevOps: Knowledge, Needs, and the Road Ahead
## Task 1 Report — Semester Project

**Course:** DevOps  
**Program:** BSSE — 8th Semester  
**Student:** Saif  
**GitHub Repository:** https://github.com/saif55045/CP  
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
5. [What Is Missing — Gaps in Our DevOps Journey](#5-what-is-missing)
6. [Alternative Tools and Frameworks](#6-alternative-tools-and-frameworks)
7. [Conclusion](#7-conclusion)

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

## 5. What Is Missing — Gaps in Our DevOps Journey

Despite covering a wide range of DevOps tools, several important areas were not fully explored:

### 5.1 Security (DevSecOps)
We briefly touched on SonarQube for code quality analysis, but **security scanning** is not deeply integrated into our pipeline. Missing elements include:
- **Container image scanning** (e.g., Trivy, Snyk) — checking Docker images for known CVEs
- **Dependency vulnerability scanning** (OWASP Dependency-Check)
- **Secrets management** (HashiCorp Vault) — preventing hardcoded credentials
- **SAST/DAST** (Static/Dynamic Application Security Testing)

### 5.2 GitOps & Advanced Deployment Strategies
Our pipeline does a basic "push WAR to Tomcat" deployment. Missing:
- **Blue-Green Deployments** — Running two identical environments, switching traffic instantly
- **Canary Releases** — Gradually rolling out new versions to a subset of users
- **Feature Flags** — Enabling/disabling features without redeployment
- **GitOps** — Using Git as the single source of truth for deployment state (ArgoCD, Flux)

### 5.3 Configuration Management
We did not cover tools like **Ansible**, **Chef**, or **Puppet**, which automate server configuration, software installation, and system state management across fleets of machines.

### 5.4 Service Mesh & Microservices
Our Todo app is a monolith. Modern enterprise applications are built as **microservices**. Missing areas:
- **Istio / Linkerd** — Service mesh for traffic management, mTLS, observability
- **API Gateway** — Managing external access to microservices

### 5.5 Advanced Kubernetes
We covered basic Kubernetes, but the following were not explored:
- **Helm Charts** — Kubernetes package manager for templated deployments
- **Horizontal Pod Autoscaler (HPA)** — Auto-scaling based on CPU/memory
- **Persistent Volumes** — Stateful application storage in Kubernetes
- **RBAC** — Role-Based Access Control for cluster security

### 5.6 Artifact Management
We did not use a dedicated artifact repository. Missing:
- **Nexus Repository** or **JFrog Artifactory** — Storing and versioning build artifacts (JARs, WARs, Docker images)

### 5.7 Logging
We set up metrics monitoring (Prometheus + Grafana) but not **centralized log management**:
- **ELK Stack** (Elasticsearch, Logstash, Kibana) — Aggregating and searching logs
- **Loki + Grafana** — Lightweight log aggregation

### 5.8 Incident Management & Runbooks
No formal **incident response process** was established — a critical real-world DevOps practice.

---

## 6. Alternative Tools and Frameworks

The following tools can complement or replace what we used, filling the identified gaps:

### 6.1 CI/CD Alternatives to Jenkins

| Tool | Type | Key Advantage |
|------|------|--------------|
| **GitHub Actions** | Cloud-native | Native GitHub integration, no server needed |
| **GitLab CI/CD** | Cloud-native | Built into GitLab, powerful pipeline syntax |
| **CircleCI** | Cloud-native | Fast, parallelism built-in |
| **Azure DevOps Pipelines** | Cloud-native | Deep Microsoft/Azure ecosystem integration |
| **TeamCity** | Self-hosted | Strong JVM support, smart build caching |

> **Recommendation:** GitHub Actions is an excellent complement to Jenkins, especially for open-source projects. Since our code is already on GitHub, adding a `.github/workflows/` directory enables CI without any additional infrastructure.

### 6.2 GitOps Tools

| Tool | Purpose |
|------|---------|
| **ArgoCD** | Continuous delivery for Kubernetes using Git as source of truth |
| **Flux** | Lightweight GitOps operator for Kubernetes |

### 6.3 Configuration Management

| Tool | Language | Use Case |
|------|----------|---------|
| **Ansible** | YAML Playbooks | Agentless, SSH-based server automation |
| **Chef** | Ruby DSL | Policy-based configuration management |
| **Puppet** | Puppet DSL | Declarative system configuration at scale |

> **Recommendation:** **Ansible** is the most beginner-friendly and widely adopted in modern DevOps. It would pair well with our existing Terraform workflow.

### 6.4 Security Tools (DevSecOps)

| Tool | Purpose |
|------|---------|
| **Trivy** | Docker image vulnerability scanner |
| **Snyk** | Dependency and container security |
| **OWASP ZAP** | Dynamic Application Security Testing (DAST) |
| **HashiCorp Vault** | Secrets management — no more hardcoded passwords |
| **Checkov** | Static analysis for Terraform IaC |

### 6.5 Artifact & Package Management

| Tool | Purpose |
|------|---------|
| **Nexus Repository** | Host Maven, npm, Docker artifacts privately |
| **JFrog Artifactory** | Enterprise-grade artifact management |
| **GitHub Packages** | Integrated with GitHub, supports Maven, Docker |

### 6.6 Centralized Logging

| Stack | Components | Use Case |
|-------|-----------|---------|
| **ELK Stack** | Elasticsearch + Logstash + Kibana | Full-featured log search and visualization |
| **PLG Stack** | Promtail + Loki + Grafana | Lightweight, integrates with our existing Grafana |

> **Recommendation:** Since we already use Grafana, adding **Loki** for log aggregation would be the most natural extension with minimal new tooling.

### 6.7 Advanced Deployment & Testing

| Tool | Purpose |
|------|---------|
| **Spinnaker** | Multi-cloud continuous delivery with canary/blue-green |
| **Argo Rollouts** | Kubernetes-native progressive delivery |
| **Selenium/Playwright** | End-to-end browser automation testing |
| **k6 / JMeter** | Load and performance testing |
| **Chaos Monkey** | Chaos engineering — testing system resilience |

### 6.8 Service Mesh

| Tool | Purpose |
|------|---------|
| **Istio** | Full-featured service mesh: traffic management, mTLS, observability |
| **Linkerd** | Lightweight service mesh for Kubernetes |
| **Consul** | Service discovery and configuration |

---

## 7. Conclusion

This semester has provided a comprehensive foundation in DevOps practices and tooling. Starting from the basics of **Linux** and **Bash scripting**, we progressed through the full DevOps toolchain — versioning code with **GitHub**, containerizing applications with **Docker**, orchestrating at scale with **Kubernetes**, automating infrastructure with **Terraform** on **AWS**, building CI/CD pipelines in **Jenkins**, and monitoring systems with **Prometheus and Grafana**.

Our **Todo List CI/CD project** is a practical demonstration of these principles working together: a developer commits code to GitHub, Jenkins automatically detects the change, runs tests, packages the application, and deploys it to Tomcat — all without manual intervention.

However, the DevOps landscape is vast. Areas such as **DevSecOps** (security integration), **GitOps** (ArgoCD/Flux), **configuration management** (Ansible), **centralized logging** (ELK/Loki), and **advanced deployment strategies** (canary, blue-green) represent the next frontier. Modern organizations combining these with what we have learned would have a truly mature, production-grade DevOps practice.

DevOps is not a destination — it is a journey of **continuous improvement**, mirroring the very pipelines it creates.

---

### References

1. Humble, J., & Farley, D. (2010). *Continuous Delivery*. Addison-Wesley.
2. Kim, G., Humble, J., Debois, P., & Willis, J. (2016). *The DevOps Handbook*. IT Revolution Press.
3. Jenkins Documentation — https://www.jenkins.io/doc/
4. Kubernetes Documentation — https://kubernetes.io/docs/
5. Terraform by HashiCorp — https://developer.hashicorp.com/terraform
6. Prometheus Documentation — https://prometheus.io/docs/
7. AWS Documentation — https://docs.aws.amazon.com/
8. Docker Documentation — https://docs.docker.com/

---

*Submitted for DevOps Course — BSSE 8th Semester | May 2026*
