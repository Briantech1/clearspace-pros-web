pipeline {
    agent any
    
    tools {
        nodejs 'NodeJS-18'
    }
    
    environment {
        STAGING_SERVER = '192.168.1.241'
        DEPLOY_PATH = '/var/www/clearspace-pros'
    }
    
    stages {
        stage('Checkout') {
            steps {
                echo '📥 Checking out code...'
            }
        }
        
        stage('Install') {
            steps {
                echo '📦 Installing dependencies...'
                sh 'npm ci'
            }
        }
        
        stage('Build') {
            steps {
                echo '🔨 Building project...'
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                echo '🚀 Deploying to staging...'
                sh '''
                    rsync -avz --delete \
                        -e "ssh -i ~/.ssh/id_rsa -o StrictHostKeyChecking=no" \
                        dist/ \
                        brian@${STAGING_SERVER}:${DEPLOY_PATH}/
                '''
            }
        }
    }
    
    post {
        success {
            echo '✅ Deployment successful!'
            echo "🌐 http://${STAGING_SERVER}"
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
