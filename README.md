# 🏗️ High Availability Web Application Deployment on AWS

This project demonstrates deploying a **highly available Node.js application** on AWS infrastructure using **CloudFormation, Auto Scaling, ALB, RDS, WAF, and a GitHub CI/CD Pipeline**.

---

## 📐 Architecture Overview

The infrastructure is designed to be robust, scalable, and secure, using the following components:

### 1. **Infrastructure Setup**
- Provisioned via **AWS CloudFormation**.
- Multi-AZ deployment for **high availability**.
- Infrastructure as Code (IaC) for reproducibility and scalability.

### 2. **Compute & Scaling**
- **EC2 Auto Scaling Group** across two Availability Zones.
- **NGINX** is used as the web server for the Node.js application.
- **Application Load Balancer (ALB)** routes traffic to healthy EC2 instances.

### 3. **Database & Storage**
- **Amazon RDS MySQL** with Multi-AZ failover support.

### 4. **Networking & Security**
- **Custom VPC** with public and private subnets.
-   Security groups and **NACLs** for EC2 and RDS access control.
- **AWS WAF** is configured to filter common web threats.

### 5. **CI/CD Pipeline**
- **GitHub Actions** used as the CI/CD pipeline.
- Automatically deploys changes from GitHub repo to EC2.
- **SCP/SSH** is used to transfer application files to EC2.
- `index.js` runs a basic **Hello World** Node.js server.

### 6. **Monitoring & Logging**
- **AWS CloudWatch Logs and Metrics** enabled for EC2 and RDS monitoring.
- **AWS SNS (Simple Notification Service)** configured to send alert notifications (CPU, Disk usage, etc.).

---

## 🔧 Tools & Technologies Used

| Category            | Tools/Services                   |
|---------------------|----------------------------------|
| Infrastructure       | AWS CloudFormation, EC2, ALB     |
| Web Server           | NGINX                  	 |
| Application          | Node.js
| CI/CD Pipeline       | GitHub Actions, SSH/SCP         |
| Database             | Amazon RDS MySQL                |
| Monitoring           | CloudWatch, SNS                 |
| Security             | AWS WAF, Security Groups,       |
| Networking           | VPC, Subnets, Route Tables      |

---



