pipeline {
    agent any

    stages {
        stage('Git Pull') {
            steps {
                git branch: 'master', url: 'https://github.com/rushi30699/SPE_MAJOR_PROJECT.git'
            }
        }
        stage('Building a Docker frontend Image') {
            steps {
                dir('frontend') {
                    script {
                        imageName = docker.build("rushi4350/chat-frontend:frontend")
                    }
                }
            }
        }
        stage('Push The Docker frontend Image') {
            steps {
                script {
                    withDockerRegistry([credentialsId: "docker-hub-credentials", url: ""]) {
                        imageName.push()
                    }
                }
            }
        }
        stage('Building a Docker backend Image') {
            steps {
                dir('server') {
                    script {
                        imageName = docker.build("rushi4350/chat-backend:backend2")
                    }
                }
            }
        }
        stage('Push The Docker backend Image') {
            steps {
                script {
                    withDockerRegistry([credentialsId: "docker-hub-credentials", url: ""]) {
                        imageName.push()
                    }
                }
            }
        }
        
        stage('Ansible Pull Docker Image') {
            steps {sh 'ansible-playbook -i localhost, --connection=local /home/lenovo/IdeaProjects/SPE_MAJOR/ansible-deploy/ansible-book.yml'}
        }
    }   
}