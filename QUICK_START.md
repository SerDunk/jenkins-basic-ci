# QUICK START - Jenkins Pipeline Setup

## 🚀 What You Need to Do (Step by Step)

### 1️⃣ PUSH CODE TO GITHUB
```powershell
# Navigate to your project
cd C:\Users\Lenovo\Desktop\portfolio-site

# Initialize git (if not done)
git init

# Add remote
git remote add origin https://github.com/SerDunk/jenkins-basic-ci.git

# Add all files
git add .

# Commit
git commit -m "Add Jenkins pipeline and Dockerfile"

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2️⃣ INSTALL JENKINS PLUGINS
Go to Jenkins → Manage Jenkins → Manage Plugins → Available
Install these:
- ✅ Docker Pipeline
- ✅ Docker Plugin  
- ✅ Git Plugin
- ✅ Pipeline

### 3️⃣ ADD DOCKER HUB CREDENTIALS IN JENKINS
1. Jenkins → Manage Jenkins → Manage Credentials
2. Click (global) → Add Credentials
3. Fill:
   - Kind: Username with password
   - Username: <your-dockerhub-username>
   - Password: <your-dockerhub-password>
   - ID: `dockerhub-credentials`
4. Save

### 4️⃣ UPDATE JENKINSFILE
Open `Jenkinsfile` and change:
```
REGISTRY = 'your-dockerhub-username'
```
to your actual Docker Hub username, then push to GitHub again.

### 5️⃣ CREATE JENKINS PIPELINE JOB
1. Jenkins Dashboard → New Item
2. Name: `portfolio-docker-pipeline`
3. Type: Pipeline → OK
4. Configure:
   - GitHub project: ✅ (add your repo URL)
   - Pipeline Definition: Pipeline script from SCM
   - SCM: Git
   - Repository URL: https://github.com/SerDunk/jenkins-basic-ci.git
   - Branch: */main
   - Script Path: Jenkinsfile
5. Save

### 6️⃣ RUN THE PIPELINE
1. Click "Build Now"
2. Watch it build!
3. Check Docker Hub for your image

---

## 📋 Files Created
- `Jenkinsfile` - Pipeline configuration
- `Dockerfile` - Already exists (for building image)
- `JENKINS_SETUP.md` - Detailed guide
- `QUICK_START.md` - This file

## 🔍 What the Pipeline Does
1. ✅ Checks out code from GitHub
2. ✅ Builds Docker image
3. ✅ Runs tests
4. ✅ Pushes to Docker Hub
5. ✅ Cleans up

## ⚠️ Important Notes
- Make sure Docker is running on Jenkins server
- Jenkins user must have Docker permissions
- Update Docker Hub username in Jenkinsfile before running

## 📞 Need Help?
Check `JENKINS_SETUP.md` for detailed troubleshooting!
