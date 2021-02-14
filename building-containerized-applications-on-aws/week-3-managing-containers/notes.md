## Task Definition
- essentially a blueprint for your deployment
- a text file in JSON format describes one or more containers that form your application, with a maximum of up to 10
- specify various parameters for your application, e.g.
    - the container to use
    - which launch type to use
    - ports to open
    - data volumes to use

## Task 
- It's the instantiation of a task definition within a cluster.

## Scheduler 
- responsible for placing tasks on your cluster
- essentially the when and where of running your tasks
- several different options available, you can define a service that    
    - runs and maintains a specified number of tasks simultaneously
    - manually run tasks
    - schedule tasks
    - and even use custom schedulers with ECS

## Cluster
- the logical grouping of compute resources
- When you run tasks, using Amazon ECS, you place them on a cluster.
- Depending on the launch type you're using, the clusters can be either managed for you using Fargate, or managed by you using EC2.

## Service
- ECS allows you to run and maintain a specified number of instances of a task definition simultaneously. This is called a service.
- Services can
    - be run behind a load balancer
    - allow you to specify deployment configurations
    - and can be deleted, which would stop all of the running tasks associated with the service

## Container Agent
- The container agent runs on each compute node within an ECS cluster.
- It sends information about the resource's current running task and resource utilization to ECS, as well as starting and stopping tasks
whenever it receives a request from ECS.
