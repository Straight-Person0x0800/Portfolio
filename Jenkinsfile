pipeline {
  agent any
  stages {
    stage('checkpoint code') {
      steps {
        git 'https://github.com/Straight-Person0x0800/Portfolio'
      }
    }

    stage('ls') {
      parallel {
        stage('ls') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Front-end Testing') {
          steps {
            sh '''cd frontend && npm i && npm run test:uni
'''
          }
        }

      }
    }

  }
}