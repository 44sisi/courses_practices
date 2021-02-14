# Kubernetes 

- Because you describe a desired state and Kubernetes handles the actual implementation, the files that describe the state can be checked into a version control system, such as Git, and repeatedly and deterministically deployed.
- Kubernetes has clusters, which is made up of nodes, and that you run pods that get placed on those nodes, and that, a grouping of pods can be exposed as a service.

## Kubernetes cluster
- Kubernetes allows you to deploy and manage your containers across a fleet of hosts and this fleet of hosts together is called your cluster.
- In Kubernetes, a cluster's composed of hosts that we call nodes or workers.
- Since you are using AWS, each node is an EC2 instance and you'll be using Kubernetes to place your container instances onto that EC2-based cluster.


## Kubernetes objects

- You will use Kubernetes objects to define the desired state of your cluster.

### Pods
- A pod is a container or grouping of containers that you want to run.
- A pod is a wrapper around your container that Kubernetes communicates with for management.
- A pod might only have one container inside of it or it could have many.
    - If you have containers they need to share resources or are tightly coupled, you may choose to put those inside of one pod, but this is actually considered an advanced use case, and when it comes time to scale, you can't break those pods apart into smaller pieces, so you would need to scale the entire pod horizontally or vertically.
    - It's most common to use pods as a wrapper for one singular container instance. In that case, when you need more instances of a singular container, you can add more pods without affecting the other containers or pods running on the cluster.
- Each pod has an IP address and you can define what ports it needs
to communicate on between pods or between outside services and your container.
- Your application might be made up of one or multiple pods, and this makes sense when you think about microservice architectures, which break your application up into many individual components.

### Services
- When you have a pod or a collection of pods that you want to expose as a microservice, you would create what is called a service in Kubernetes.
- Kubernetes has built-in service discovery using DNS or you can use other service discovery tools to expose your services to one another for communication.

### Volumes
- Problem 1: containers are ephemeral, meaning that any files that are saved or created on disk in a container would be lost when the container is stopped or restarted. This can be a problem for applications that need persistent disk storage.
- Problem 2: What if two containers in a pod need to share files?
- Volumes are a Kubernetes object that represent directories that mount to pods, so containers have access to read and modify files in a persistent manner.
- The idea of Kubernetes volumes is very similar to the idea of Docker volumes.

### Namespaces
- Namespaces allow you to have multiple virtual Kubernetes clusters backed by the same physical cluster.
- This makes it easier to divide up cluster resources across multiple users or teams while isolating the resource names.
- This makes it so that two different teams could create services
or other resources with the same name in different namespaces and not run into any conflicts.


## Kubernetes API
- You create these objects and you call the Kubernetes APIs which will kick off a series of processes to ensure that your cluster matches your various object definitions.
- State changes for your cluster may include things like, running a new pod, scaling your system, changing what images are being used for your container instances, changing network or disk resources and a lot more, too.

<p>&nbsp;</p>

# EKS
- With EKS pods are defined with a pod spec within a YAML based manifest file.
- A pod spec includes the pod's name, containers, and volumes that will be created for the pod.
- A ReplicaSet ensures a specific number of pod replicas are running at any given time. ReplicaSets describe desired state via YAML to create the deployment, and the deployment changes the actual state to the desired state at a controlled rate.
- You can set up scheduling constraints at the node level as well as at the pod level.

<p>&nbsp;</p>

# Demo

## Setup
- Installation, update and setup of the AWS Command Line tools.
- Install the Command Line tools for EKS (EKS control) and Kubernetes (Kube control). 
- EKS control will be utilized for our cluster management, and Kube control will be our management tool for the containers.

## Use EKS control to create cluster
```
eksctl create cluster \
--name eksdemo \
--version 1.14 \
--nodegroup-name standard-workers \
--node-type t3.medium \
--nodes 3 \
--nodes-min 1 \
--nodes-max 4 \
--node-ami auto
```
- `--name` is the identifier in the cluster in EKS
- `--version` is the version of Kubernetes
- All of the other parameters are related to the nodes that are going to be launched as part of the cluster.
    - `--nodegroup-name` is the identifying name for the cluster of instances
    - `--node-type`is the instance type that is being launched for this particular implementation
    - `--nodes`, `--nodes-min`, `--nodes-max` are all focused on the number of instances you are going to run. 
        - In this case, it's going to start with three instances,
        - but should scaling be established and configured, it could have as many as four instances, or as few as one.
    - `--node-ami` is referring to the image that is going to be used to prepare the instance to manage the containers.


## To see the cluster created 
- 
    ```
    aws eks list-clusters --region-west-2 --output=json
    ```

- Output: 
    ```
    {
        "clusters": [
            "eksdemo"
        ]
    }
    ```

## Spin up some of our own pods in a deployment
- Pulls the latest Nginx image from Docker Hub and creates a deployment with one pod.

    ```
    kubectl create deployment nginx --image=gninx: latest
    ```

- It works well for the purposes of this demo for a quick testing, but in the real world, this is done differently.
- One, you wouldn't use the latest, and two, you would also put all of the details for this deployment into a declarative YAML file.
- We also don't ever want to just run one of anything,
so let's scale up this deployment.
    ```
    kubectl scale deployment/nginx --replicas=4
    ```

## Make sure the deployment's scaled out to four pods
- First, we'll describe the deployment to get more details.
    ```
    kubectl describe deployment/nginx
    ```

- Now, let's see those four pods actually running.
    ```
    kubectl get pods
    ```
    - You can see the original pod, and three created simultaneously by the scale command.

## Expose this deployment as a service fronted by a load balancer.
- 
    ```
    kubectl expose deploy/nginx --port=80 --target-port=80 --type=LoadBalancer --name=web
    ```
    - Here, Kubernetes exposes the service and creates ELB on its own.

- There's no secret here for EKS, as this is upstream Kubernetes existing integration with AWS. And because this is upstream Kubernetes, we can use the standard cube control tricks, like JSONPath output filtering.
    ```
    kubectl get svc/web -o=jsonpath="{.status.loadBalancer.ingress..hostname}"
    ```

- After giving it a few minutes to make sure the load balancer's up and running, and that the targets are registered properly and serving traffic, we can use this output of this previous command to allow us to view the web page we've just set up. 
- And with that, we have public facing containers up and running with EKS.

<p>&nbsp;</p>

# Scaling container-based workloads on Kubernetes
- You'll need to scale both the nodes in your cluster as well as the pods which have your container instances running inside them.
- Cluster scaling
    - EKS supports something called the Cluster Autoscaler.
    - The Cluster Autoscaler integrates with AWS Auto Scaling groups.
    - However, it doesn't support cross-availability zone Auto Scaling groups.
    - So you would create an Auto Scaling group for each availability zone that your cluster is operating, then configure the Cluster Autoscaler to be aware of the Auto Scaling groups that it will be manipulating.
    - You can then interact with your Cluster Autoscaler by using the Kube control command line interface.
- Pod scaling
    - Kubernetes has a standard API resource called the Horizontal Pod Autoscaler
        - Given a metric source it will scale the number of pods as a part of a deployment, controller, or replica set.
        - The metric source that the Horizontal Pod Scaler relies on is called the Kubernetes metrics server and this server is not deployed to an EKS cluster by default.
        - You can download the metrics server from GitHub and apply it to your cluster using the Kube control command line interface.
    - Another way is using the Vertical Pod Autoscaler
        - Also requires that you deploy the metrics server to your cluster so it can aggregate the data that is needed.

<p>&nbsp;</p>

# AWS Fargate for Amazon EKS
- AWS Fargate is a serverless technology that provides on-demand right-sized compute capacity for containers.

<p>&nbsp;</p>

# Links
- Kubernetes   
    https://kubernetes.io/docs/concepts/
- Kubernetes Objects  
    https://kubernetes.io/docs/concepts/overview/working-with-objects/kubernetes-objects/
- Kubernetes command line tool kubectl  
    https://kubernetes.io/docs/reference/kubectl/overview/
- Kubernetes Master  
    https://kubernetes.io/docs/concepts/overview/components/
- Kubernetes Pod  
    https://kubernetes.io/docs/concepts/workloads/pods/pod-overview/
- Kubernetes Service  
    https://kubernetes.io/docs/concepts/services-networking/service/
- Kubernetes Controllers  
    https://kubernetes.io/docs/concepts/architecture/controller/
- Cluster AutoScaler  
    https://aws.amazon.com/premiumsupport/knowledge-center/eks-cluster-autoscaler-setup/
- Horizontal Pod AutoScaler  
    https://docs.aws.amazon.com/eks/latest/userguide/horizontal-pod-autoscaler.html
- Vertical Pod AutoScaler  
    https://docs.aws.amazon.com/eks/latest/userguide/vertical-pod-autoscaler.html
- Use custom CloudWatch Metrics for scaling of your Amazon EKS deployment  
    https://aws.amazon.com/blogs/compute/scaling-kubernetes-deployments-with-amazon-cloudwatch-metrics/
- Basics of Amazon Elastic Kubernetes Service  
    https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html
- AWS Fargate  
    https://docs.aws.amazon.com/eks/latest/userguide/fargate-getting-started.html
- Use Amazon EBS as a persistent volume with Kubernetes  
    https://kubernetes.io/docs/concepts/storage/persistent-volumes/