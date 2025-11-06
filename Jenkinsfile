pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'portfolio-site'
        DOCKER_TAG = "${BUILD_NUMBER}"
        REGISTRY = 'serdunk'  // Change this to your Docker Hub username
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub...'
                git branch: 'main',
                    url: 'https://github.com/SerDunk/jenkins-basic-ci.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                    dockerImage = docker.build("${REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG}")
                    docker.build("${REGISTRY}/${DOCKER_IMAGE}:latest")
                }
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                script {
                    // You can add tests here if needed
                    bat 'echo Tests passed!'
                }
            }
        }
        
        stage('Push to Registry') {
            steps {
                echo 'Pushing Docker image to registry...'
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub-credentials') {
                        dockerImage.push("${DOCKER_TAG}")
                        dockerImage.push("latest")
                    }
                }
            }
        }
        
        stage('Cleanup') {
            steps {
                echo 'Cleaning up...'
                bat "docker rmi ${REGISTRY}/${DOCKER_IMAGE}:${DOCKER_TAG} || exit 0"
                bat "docker rmi ${REGISTRY}/${DOCKER_IMAGE}:latest || exit 0"
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            echo 'Cleaning workspace...'
            cleanWs()
        }
    }
}
