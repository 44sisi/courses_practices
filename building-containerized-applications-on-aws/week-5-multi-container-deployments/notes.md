# Service discovery
- The management of directing network calls between services and exposing services to one another in an automatic and dynamic way
- DNS
    - keep a registry of all of the current container instances and keep track of what DNS name they are associated with
    - ECS offers built-in support for service discovery using DNS by creating and managing a registry of service names using the Route 53 Auto Naming API.
    - EKS has service discovery support through DNS as well through the use of the same Auto Naming API that ECS uses.
- AWS Cloud Map
    - provides a registry for cloud resources that applications can then use for service discovery
- service meshes
    - an additional layer for handling interservice communication which is responsible for monitoring and controlling traffic in microservice architectures
    - allows tasks like service discovery to be handled completely by this mesh layer
    - AWS App Mesh
- third party software
    - HashiCorp Consul
    - ETCD
    - Netflix Eureka

<p>&nbsp;</p>

# AWS App Mesh

## Microservice-based architecture issues at scale
- How to generate uniform logs, metrics, and traces.
- How to load balance traffic between services.
- How to weight and shift traffic between deployments.
- How to minimize impact of networking or configuration changes to application code.
- How to decouple service teams and reduce hard dependencies.

## Service mesh
- We install a small, lightweight proxy server next to each and every container, and then wire up a separate overlay network between these proxy servers on top of the existing networking provided by the infrastructure layer such as AWS VPC.
- Because all network traffic goes through this proxy server, 
    - the application behind the proxy can remain blissfully unaware of anything beyond the proxy.
    - all the routing and logical separation of network traffic can be centralized and abstracted regardless of the specific implementation.
    - monitoring, debugging, tracing, and logging can all be centralized and analyzed together, providing significant visibility into both the overall application architecture as well was specific microservices themselves.

## AWS App Mesh
- an implementation of the open source envoy proxy, deployed as a side-car container.
- When we define our application container, we also define a side-car container of our proxy server, and wire up all traffic from the application container to go through the proxy server. This is done at the tasks definition for ECS, or pod for Kubernetes level.
- side-car container
    - First, it sits between all services and manages and observes traffic.
    - Secondly, it communicates with the control plane. This control plane generates the proxy configuration based on application or architectural requirements and then distributes the appropriate proxy configuration to each side-car.
- The side-care is deployed simultaneously, but configured separately to the application.

<p>&nbsp;</p>

# Links
- Introduction to AWS App Mesh  
    https://www.youtube.com/watch?v=1UDRGlmbiZA&feature=youtu.be&t=1499
- Deep Dive on AWS App Mesh  
    https://www.youtube.com/watch?v=_L376kq1tiI
- AWS App Mesh Public Roadmap  
    https://github.com/aws/aws-app-mesh-roadmap/projects/1
- AWS X-Ray  
    https://aws.amazon.com/xray/