# ECS Definitions
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

<p>&nbsp;</p>

# Scheduling and Task Placement
## The Schdeuling Engine
### The Service Scheduler
- It allows you to specify how you want your tasks to run and how many copies of that task you want to run.
- The Service Scheduler will maintain this number and reschedule tasks if they fail.
    - For example, if you say you want five copies of your task running across your cluster and one of those tasks fail, the Service Scheduler will replace that task so that you have five running at all times.
- The Daemon scheduling strategy
    - ensure that a specific task is running at all times on every EC2 instance in your cluster
    - may be ideal for shared services that other containers on the node need to access such as monitoring or logging tasks

### A Cron-like strategy with Amazon EventBridge
- schedule a task to run at a particular time of day or on a particular day of the week

### Other types
- create your own scheduler
- leverage third party schedulers
- fall back on running tasks manually
    - especially for one-time jobs or periodic batch jobs that you don't need to keep running or manage over long periods of time

## The Placement Engine
- Its goal is to place your task on an instance that has appropriate memory and CPU space as well as run your tasks in a configuration that you choose.
- Task placement constraints 
    - Allow you to filter out which instances you want to put containers on. You can filter based off of AMI ID, instance type, tags, and more.
    - for example
        - If you have two tasks that should run together or two tasks that should never run together such as two CPU-intensive workloads you want to keep apart, you could use a task placement constraint called affinity to do that.
        - If you have a task that has compliance requirement to use a certain AMI ID, you could use a task placement constraint to ensure that your containers are placed on only instances using that particular AMI.
- Task placement strategies
    - the binpack task placement strategy
        - packs your containers as densely as possible across your instances in the cluster
    - the spread task placement strategy
        - spreads your tasks across instances for high availability
    - strategy chaining

<p>&nbsp;</p>

# Links
- Container orchestration with ECS and Fargate    
    https://www.youtube.com/watch?v=cpqvIEgngcY&list=PLhr1KZpdzukfWFTsOD_WynnY2-e8TY8fH&index=5
- Amazon ECS FAQ  
    https://aws.amazon.com/ecs/faqs/
- Amazon ECS integrates with AWS IAM  
    https://docs.aws.amazon.com/AmazonECS/latest/userguide/security_iam_service-with-iam.html
- Using Amazon ECS or AWS Fargate with Spot Instances  
    https://aws.amazon.com/ec2/spot/containers-for-less/get-started/  
    https://aws.amazon.com/blogs/aws/aws-fargate-spot-now-generally-available/
- AWS Secrets Manager  
    https://aws.amazon.com/secrets-manager/
- More on scheduling and placing
    https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html  
    https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement.html
