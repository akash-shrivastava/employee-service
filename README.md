# Table of Contents

[Introduction](#introduction)   
[Pre Requisties for the service to run in local](#pre-requisties-in-local)   
[Using the service in local](#using-the-service-in-local)   
[Pre Requisties for the service in docker](#pre-requisties-in-docker)   
[Using the service with Docker Component](#using-the-service-with-docker-component)   
[Down all the Docker Component](#down-all-the-docker-component)   


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


