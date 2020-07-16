# Table of Contents

[Introduction](#introduction)   
[Pre Requisties for the service to run in local](#pre-requisties-in-local)   
[Using the service in local](#using-the-service-in-local)   
[Pre Requisties for the service in docker](#pre-requisties-in-docker)   
[Using the service with Docker Component](#using-the-service-with-docker-component)   
[Down all the Docker Component](#down-all-the-docker-component)   
[Pre Requisties for the service to deploy in minikube](#pre-requisties-in-minikube)   
[Deploy in minikube](#deploy-in-minikube) 



# Introduction   
Employee Service implement stack (LIFO) using micro service architecture and deploy minikube environment using docker and Kubernetes tools.

## Pre requisties in local   
1. Download and install node from https://nodejs.org/en/download/   
2. Download and install https://www.postgresql.org/download/   
3. Install dependencies    
        npm install

## Using the service in local   
1. Setup crendential for postgres database
2. Update relative information in config/app.config.js
3. Run 'npm run dev' to run locally.
4. Run 'npm run test' to run test cases locally.

## Pre requisties in docker   
1. Download and install docker from https://docs.docker.com/docker-for-windows/install/

## Using the service with docker-component  
1. Build and run postgres docker compose from ./shared-service folder and it will start at 5434 port which can be configured    

            docker-compose -f docker-compose.postgres.yml up --build  

2. Update the production env in order to connect postgres running in docker container and build and run application docker    

            docker-compose -f docker-compose.yml up --build  

3. build and run test docker in order to run test case     

            docker-compose -f docker-compose.test.yml up --build   

## Down all the docker-component   

    docker-compose -f docker-compose.postgres.yml down

    docker-compose -f docker-compose.yml down

    docker-compose -f docker-compose.test.yml down


## Pre requisties in minikube
1. Download kubectl from https://kubernetes.io/docs/tasks/tools/install-kubectl/
2. Put the kubectl download file in a localtion example C:\kube
3. Download minikube from https://kubernetes.io/docs/tasks/tools/install-minikube/
4. Put the minikube download file in same location of kubectl file i.e. C:\kube
5. Set the enivroment path

## Deploy in minikube
1. start the minikube 'minikube start'
2. Get the ip of minikube 'minikube ip'
3. start minikube dashboard for better view 'minikube dashboard'
4. create your own namespace in minikube 'kubectl create namespace <insert-some-namespace-name>
5. Deploy the postgres in minikube   

        kubectl -f ./postgres-configmap.yaml  --namespace= <insert-namespace-created>
6. update postgres configuration in config/app.config.js
  
                example:
                   postgres:{   
                         username: employee_user    // config file postgres in minikube   
                         password: employee        // config file postgres in minikube   
                         host: 10.101.241.80      // service of postgres in minikube dashboard has information about clusterIP  
                         port: 5432             // service of postgres in minikube dashboard has information about port   
                         }  
7. build the app image for deployment in minikube

                minikube docker-env

                minikube docker-env | Invoke-Expression

                docker build -f .\Dockerfile -t <tage-name>:<version> .

8. update image in deployment.yaml

                image: <tag-name>:<version>
9. deploy the image in minikube namespace as deployment

        kubectl apply -f .\deployment.yaml --namespace=<insert-namespace-created>
10. expose the image deployed in pod as service type load balancer to access from outside minikube

        kubectl expose deployment <app-name> --type=LoadBalancer --namespace=<insert-namespace-created>
11. to hit end point use ip of minikube ie. 'minikube ip' and exposed port of image running in pod from services of app.