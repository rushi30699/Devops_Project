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
                       imageName = docker.build("rushi4350/chat-backend:backend")
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

       stage('Deploy with Ansible') {
           steps {
               script {
                   ansiblePlaybook(
                       becomeUser: null,
                       colorized: true,
                       disableHostKeyChecking: true,
                       installation: 'Ansible',
                       inventory: 'ansible-deploy/inventory',
                       playbook: 'ansible-deploy/ansible-book.yml',
                       sudoUser: null
                   )
               }
           }
       }
   }
}