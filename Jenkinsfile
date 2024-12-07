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

        stage('Back-end Testing') {
          steps {
            echo 'Back-end Testing'
          }
        }

      }
    }

    stage('Build_Front_image') {
      steps {
        sh 'cd frontend && ls -la && docker build -t portfolio_front_end:v1 .'
      }
    }

    stage('Build_Back_image') {
      steps {
        sh 'ls -la && cd backend && docker build -t backend_image:v1 .'
      }
    }

    stage('display docker images') {
      steps {
        sh 'docker image ls'
      }
    }

    stage('test-deploy-docker-compose') {
      agent {
        node {
          label 'node1'
        }

      }
      steps {
        git(url: 'https://github.com/Straight-Person0x0800/Portfolio', branch: 'master')
        sh 'ls -la && docker-compose up'
      }
    }

  }
}