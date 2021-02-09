# Fargate
- The serverless way to host a container using ECS.
- EC2 instances are abstracted away without the need to manage underlying infrastructures.
- Can configure image, memory, vCPU, network, IAM for containers.

## Terminologies

### Cluster
- A logical isolation boundary for the infrastructure that hosts the containers.
- This cluster is abstracted away from you, so you do not have SSH access or network access to any underlying instances.

### Task
- A task is at a basic level just a wrapper to run your containers in.
- A task definition is a configuration for what container or containers that are going to be run.
- A task definition includes 
    - what image and tags should be used
    - memory and vCPU for each container
    - what ports the container should be listening on
    - any shared volumes if they are needed
- Your application can span multiple task definitions by combining related containers into their own task definitions, each representing a single component of your application.

### Service
- A service will actually run the task based on that task definition.
- A service configures
    - the number of running tasks you want to run and maintain across your cluster
    - whether you want to front your service with a load balancer or not
    - subnets and security groups for the tasks

<p>&nbsp;</p>

# Load Balancer
- the solution to how to get traffic to our tasks on our instances

- types:
    - network load balancer
    - classic load balancer,
    - application load balancer
        - dynamic host port mapping: recommended to load balance HTTP or HTTPS requests
        - path-based routing: can route requests based off of the URL

<p>&nbsp;</p>

# Task Definition
- Allows containers to be able to communicate with outside services.

## Docker networking mode for the containers

## none
- doesn't allow your containers to talk to anything or anyone
- doesn't allow you to specify any port mappings

## bridge
- the default mode and uses Docker's built-in network
- each task gets its own private IP and uses the Docker bridge for any communication
- containers will share the same network interface as their host EC2 instance

## host
- removes the need for Docker's built-in virtual network because the container ports are mapped directly into the EC2 instance's network interface
- can't use dynamic host port mapping as this mode doesn't allow multiple tasks from the same service to be placed on a single container instance

## AWS VPC mode
- offers the highest networking performance for containers
because every task is given the same networking properties
as regular EC2 instances
- every task is given its own elastic networking interface,
its own private IP, and an internal DNS host name
- doesn't allow dynamic host port mapping
- required to use a VPC, subnets, and security groups for your containers

<p>&nbsp;</p>

# Persistent Storage

## Default behaviour
- Storage used by containers is not persistent by default.
- Files saved in container's writable layer are by nature ephemeral.
- As a result of using copy-on-write for the top writeable layer,
when the container is removed, associated data is lost.


## Problem
In order to have persistent data with containers, the data needs to be externalized and persisted outside of the container and not applied as a container layer.

## Solutions

### Bind mount  
- A file or folder stored anywhere on the container host file system
and mounted into a running container. Mounts can actually be modified by processes outside of your container management.
- When using a mount, you need to set the mount flag when running a new container and specify the source folder on the container host.
- Data is not initialized and it is common to run into permission issues.

### Volumes
- Volumes are stored by the host file system as well but they are completely managed by the container agent.
- Volumes still utilize the mount flag to specify the volume to be mounted to a new container. But instead of specifying a local directory, you specify the name of the volume that you want to mount to the container.
- Permission issues are far less common and volumes provide the additional capability to access non-local storage systems such as NFS mounts.

### Notes for Amazon Elastic Block Store volumes
- If using EBS for your underlying host storage, the EBS volumes are specific to availability zones and cannot be mounted across AZs or to multiple Elastic Compute Cloud instances at the same time.
- If trying to share volume access across containers, the containers would need to be on the same underlying instance or the volume would need to be cloned using an EBS Snapshot and then creating a new volume.

<p>&nbsp;</p>

# Amazon CloudWatch Container Insights
- Collect metrics like CPU, memory, disk and network utilization, as well as log information in one centralized location.
- Can be used for your containerized workloads whether you're using Amazon ECS, Amazon EKS, or if you're using your own Kubernetes platform on Amazon EC2.

## Opt in to Container Insights enabled clusters
- go the ECS Console
- click on Account Settings in the left-hand side 
- scroll all the way down to where it says CloudWatch Container Insights
- enable it for your IAM user
- click Save

<p>&nbsp;</p>

# Links

- ECS developer guide:  
    https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html
- To get started with Container Insights:  
    https://aws.amazon.com/blogs/mt/introducing-container-insights-for-amazon-ecs/
- Storage volumes in Docker:  
    https://docs.docker.com/storage/volumes/
- Volumes in Amazon ECS:  
    https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html
- AWS resources on microservices:  
    https://aws.amazon.com/microservices/
- Get started with Amazon ECS and AWS Fargate:  
    https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_GetStarted_Fargate.html
- AWS Command Line Interface:  
    https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI.html


