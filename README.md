# README #

### What is this repository for? ###

* Quick summary
* Version

    1.0

### How do I get set up? ###

* Summary of set up
    
    - Run all containers.
    ```
    docker-compose up -d
    ```
    - Exit containers
    ```
    docker-compose kill && docker-compose rm
    ```
    - Restart containers
    ```
    docker-compose up -d
    docker-compose restart
    ```
    - You can easily scale your containers by `docker-compose scale`
    ```
    docker-compose scale app=3
    ```
    - Containers knows each host's name via Consul DNS.
    ```bash
    # attach to running container
    $ docker exec -it dockermicroservicetemplate_app_1 /bin/bash
    # name resolution
    root@1be773ff5254:/var/www/html#  ping mysql.service.consul
    
    PING mysql.service.consul (10.1.0.45): 56 data bytes
    64 bytes from 10.1.0.45: icmp_seq=0 ttl=64 time=0.068 ms
    64 bytes from 10.1.0.45: icmp_seq=1 ttl=64 time=0.090 ms
    ```
    
* Configuration

    DOCKER_OPTS="--dns 172.17.0.1 --dns 8.8.8.8 --dns-search service.consul" For UBUNTI
    
    MAC OS -> go to your docker application
    Preferences -> Daemon -> Advanced
    Add This JSON
    {
      "dns-search" : [
        "service.consul"
      ],
      "dns" : [
        "172.17.0.1",
        "8.8.8.8"
      ],
      "debug" : true,
      "experimental" : true
    }
    
* Dependencies

* Database configuration

* Deployment instructions

* Repo owner or admin
    
    Building a NodeJS Mysql API
    Implementing Eventuate in de microservices architecture.
    Making all microservices use the registry service.


### Who do I talk to? ###

* Repo owner or admin
    
    vanoijenruud@gmail.com
