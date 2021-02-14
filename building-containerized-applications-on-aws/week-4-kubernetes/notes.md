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