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
            echo 'testing front-end'
          }
        }

      }
    }

    stage('Build_Front_image') {
      steps {
        sh 'cd frontend && docker build -t portfolio_front_end:v1 .'
      }
    }

  }
}