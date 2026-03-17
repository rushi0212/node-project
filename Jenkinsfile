pipeline {
  agent any

  environment {
    DOCKER_CREDENTIALS_PSW = credentials('DOCKER_CREDENTIALS_PSW')
	DOCKER_CREDENTIALS_USR = credentials('DOCKER_CREDENTIALS_USR')
  }
  stages {
    stage('Checkout'){
      steps {
	git branch: 'main;
	url : 'https://github.com/rushi0212/node-project.git'
      }
    }
    stage('Build docker image'){
      steps {
	sh 'docker build -t rushi1501/node-project .'
      }
    }
    stage('Login to DockerHub'){
      steps {
	sh 'echo $DOCKER_CREDENTIALS_PSW | docker login -u $DOCKER_CREDENTIALS_USR --password-stdin'
      }
    }
    stage('Push to DockerHub'){
      steps{
	sh ' docker push rushi1501/node-project'
      }
    }
  }
  post {
    always {
	sh 'docker logout'
    }
  }
}
