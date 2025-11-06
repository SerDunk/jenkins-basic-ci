# Jenkins Pipeline Setup Guide

This guide will help you set up a Jenkins pipeline to build Docker images from your GitHub repository.

## Prerequisites

Before you start, make sure you have:
- ✅ Jenkins installed and running
- ✅ Docker installed on the Jenkins server
- ✅ GitHub repository: https://github.com/SerDunk/jenkins-basic-ci.git
- ✅ Docker Hub account (for pushing images)

---

## Step 1: Install Required Jenkins Plugins

1. Go to Jenkins Dashboard → **Manage Jenkins** → **Manage Plugins**
2. Click on the **Available** tab
3. Search and install the following plugins:
   - **Docker Pipeline**
   - **Docker Plugin**
   - **Git Plugin**
   - **Pipeline**
   - **GitHub Integration Plugin**

4. Click **Install without restart** or **Download now and install after restart**
5. Restart Jenkins if needed

---

## Step 2: Configure Docker in Jenkins

1. Go to **Manage Jenkins** → **Global Tool Configuration**
2. Scroll to **Docker** section
3. Click **Add Docker**
4. Name it: `docker`
5. Check **Install automatically** or provide the Docker installation path
6. Save the configuration

---

## Step 3: Add Docker Hub Credentials

1. Go to **Manage Jenkins** → **Manage Credentials**
2. Click on **(global)** domain
3. Click **Add Credentials**
4. Fill in:
   - **Kind**: Username with password
   - **Username**: Your Docker Hub username
   - **Password**: Your Docker Hub password (or access token)
   - **ID**: `dockerhub-credentials` (must match Jenkinsfile)
   - **Description**: Docker Hub Credentials
5. Click **OK**

---

## Step 4: Create Jenkins Pipeline Job

1. From Jenkins Dashboard, click **New Item**
2. Enter name: `portfolio-docker-pipeline`
3. Select **Pipeline** and click **OK**
4. In the configuration page:

### General Section:
   - Check **GitHub project**
   - Project url: `https://github.com/SerDunk/jenkins-basic-ci/`

### Build Triggers (Optional):
   - Check **GitHub hook trigger for GITScm polling** (for automatic builds)
   - OR check **Poll SCM** and set schedule: `H/5 * * * *` (checks every 5 minutes)

### Pipeline Section:
   - **Definition**: Pipeline script from SCM
   - **SCM**: Git
   - **Repository URL**: `https://github.com/SerDunk/jenkins-basic-ci.git`
   - **Credentials**: Add if private repo (otherwise leave as none)
   - **Branch Specifier**: `*/main` (or `*/master` depending on your default branch)
   - **Script Path**: `Jenkinsfile`

5. Click **Save**

---

## Step 5: Update Jenkinsfile

Before running the pipeline, update the `Jenkinsfile`:

1. Open `Jenkinsfile` in your repository
2. Change line with `REGISTRY = 'your-dockerhub-username'`
   - Replace `your-dockerhub-username` with your actual Docker Hub username
3. Commit and push to GitHub:
   ```bash
   git add Jenkinsfile
   git commit -m "Update Docker registry username"
   git push origin main
   ```

---

## Step 6: Push Code to GitHub

If you haven't already pushed your code:

```bash
# Initialize git if not already done
git init

# Add the remote repository
git remote add origin https://github.com/SerDunk/jenkins-basic-ci.git

# Add all files
git add .

# Commit
git commit -m "Add Jenkins pipeline and Dockerfile"

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 7: Run the Pipeline

1. Go to your pipeline job: `portfolio-docker-pipeline`
2. Click **Build Now**
3. Watch the build progress in the **Build History**
4. Click on the build number (e.g., #1) to see details
5. Click **Console Output** to see logs

---

## Step 8: Verify Docker Image

After successful build:

1. Check Docker Hub:
   - Go to https://hub.docker.com
   - Login and check your repositories
   - You should see `your-username/portfolio-site` with tags

2. Or check locally on Jenkins server:
   ```bash
   docker images | grep portfolio-site
   ```

3. Test the image:
   ```bash
   docker run -p 3000:3000 your-username/portfolio-site:latest
   ```

---

## Troubleshooting

### Issue: "Docker command not found"
**Solution**: 
- Add Jenkins user to docker group:
  ```bash
  sudo usermod -aG docker jenkins
  sudo systemctl restart jenkins
  ```

### Issue: "Permission denied" for Docker
**Solution**:
- Ensure Jenkins has permission to run Docker commands
- On Linux: `sudo chmod 666 /var/run/docker.sock`

### Issue: "Git command not found"
**Solution**: Install Git on Jenkins server

### Issue: Pipeline fails at Push stage
**Solution**: 
- Verify Docker Hub credentials are correct
- Ensure credential ID is `dockerhub-credentials`

### Issue: "Docker daemon not running"
**Solution**: 
- Start Docker: `sudo systemctl start docker`
- Enable Docker: `sudo systemctl enable docker`

---

## Pipeline Stages Explained

1. **Checkout**: Clones code from GitHub repository
2. **Build Docker Image**: Builds Docker image from Dockerfile
3. **Test**: Runs any tests (placeholder for now)
4. **Push to Registry**: Pushes image to Docker Hub
5. **Cleanup**: Removes local images to save space

---

## Next Steps

- Set up GitHub Webhooks for automatic builds on push
- Add automated tests
- Set up deployment stage
- Configure notifications (email, Slack, etc.)
- Add environment-specific builds (dev, staging, prod)

---

## Useful Jenkins Commands

```bash
# Restart Jenkins
sudo systemctl restart jenkins

# Check Jenkins status
sudo systemctl status jenkins

# View Jenkins logs
sudo journalctl -u jenkins -f

# Jenkins default port
http://localhost:8080
```

---

## GitHub Webhook Setup (Optional - for Auto-build)

1. Go to your GitHub repository
2. Settings → Webhooks → Add webhook
3. Payload URL: `http://your-jenkins-url:8080/github-webhook/`
4. Content type: `application/json`
5. Select: **Just the push event**
6. Click **Add webhook**

Now Jenkins will automatically build when you push to GitHub!

---

Good luck with your CI/CD pipeline! 🚀
