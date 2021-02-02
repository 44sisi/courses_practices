
- to test whtehr docker is installed properly by pulling the image hello-world from docker hub

    `docker run hello-world`

- to see images on the host

    `docker images`

- run container

    `docker run -d -p 98080:8080 <imageid> [--name <name>]`

    - `-d`: detached mode, container starts up and run in the background, can se terminal to run other command at the same time

    - `-p`: to publish which port we are using for container and host, hostpot:containerpot. e.g. port 8080 on the container can be accessed internally through port 8080 on the Amazon EC2 instance

    - `name`: give a name to the container, optional

- confirm container is running

    `docker container ls`

- create a bash session in the container

    `docker exec it <containerid> bash`

- log out from the container (exit from the terminal)

    `exit`

- view logs of the container

    `docker logs <containerid>`

- look at where docker logs are saved

    - log in as super user, or root user

        `sudo su`

    - change directory to where containers are stored

        `cd /var/lib/docker/containers`

    - list container ids

        `ls`

    - change directory into the container

        `cd <containerid>`

    - see information about docker container

        `ls`

    - see the logs

        `cat <logfile.log>`


- stop container

    `docker stop <containerid>`

- remove container 

    `docker rm <containerid>`

- give a list of all containers
    `docker container ps -a`


