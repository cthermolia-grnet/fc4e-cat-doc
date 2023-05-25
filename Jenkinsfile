pipeline {
    agent { 
        docker { 
            image 'node:buster' 
        }
    }
    options {
        checkoutToSubdirectory('fc4e-cat-doc')
        newContainerPerStage()
    }
    environment {
        PROJECT_DIR='fc4e-cat-doc'
        GH_USER = 'newgrnetci'
        GH_EMAIL = '<argo@grnet.gr>'
   }
    stages {
    
        stage ('Deploy Docs') {
            when {
                anyOf {
                    branch 'master'
                    branch 'devel'
                }
            }
            steps {
                echo 'Publish CAT docs...'
                sh '''
                    cd $WORKSPACE/$PROJECT_DIR
                    npm install
                '''
                sshagent (credentials: ['jenkins-master']) {
                    sh '''
                        cd $WORKSPACE/$PROJECT_DIR
                        mkdir ~/.ssh && ssh-keyscan -H github.com > ~/.ssh/known_hosts
                        git config --global user.email ${GH_EMAIL}
                        git config --global user.name ${GH_USER}
                        GIT_USER=${GH_USER} USE_SSH=true npm run deploy
                    '''
                }
            }
        } 
    }
    post{
        always {
            cleanWs()
        }
        success {
            script{
                if ( env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'devel' ) {
                    slackSend( message: ":rocket: New version of fc4e-cat-doc docs deployed! Job: $JOB_NAME !\n <https://fc4e-cat.github.io/fc4e-cat-doc/|See them here...>")
                }
            }
        }
        failure {
            script{
                if ( env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'devel' ) {
                    slackSend( message: ":rain_cloud: Deployment of fc4e-cat-doc docs failed! Job: $JOB_NAME ")
                }
            }
        }
    }
}
