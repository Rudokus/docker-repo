#!/usr/bin/env bash

if [ -z "$DOCKER_HOST_IP" ] ; then
    if [ -z "$DOCKER_HOST" ] ; then
      export DOCKER_HOST_IP=`hostname`
    else
      echo using ${DOCKER_HOST?}
      XX=${DOCKER_HOST%\:*}
      export DOCKER_HOST_IP=${XX#tcp\:\/\/}
    fi
fi

echo DOCKER_HOST_IP is $DOCKER_HOST_IP

export SPRING_DATASOURCE_URL=jdbc:mysql://${DOCKER_HOST_IP}/eventuate
export SPRING_DATASOURCE_USERNAME=mysqluser
export SPRING_DATASOURCE_PASSWORD=mysqlpw
export SPRING_DATASOURCE_DRIVER_CLASS_NAME=com.mysql.jdbc.Driver
export EVENTUATELOCAL_KAFKA_BOOTSTRAP_SERVERS=$DOCKER_HOST_IP:9092
export EVENTUATELOCAL_CDC_DB_USER_NAME=root
export EVENTUATELOCAL_CDC_DB_PASSWORD=rootpassword
export EVENTUATELOCAL_ZOOKEEPER_CONNECTION_STRING=$DOCKER_HOST_IP:2181
export EVENTUATELOCAL_CDC_POLLING_INTERVAL_IN_MILLISECONDS=500
export EVENTUATELOCAL_CDC_MAX_EVENTS_PER_POLLING=1000
export EVENTUATELOCAL_CDC_MAX_ATTEMPTS_FOR_POLLING=100
export EVENTUATELOCAL_CDC_POLLING_RETRY_INTERVAL_IN_MILLISECONDS=500

echo SPRING_DATASOURCE_URL=$SPRING_DATASOURCE_URL

export USER_ID=$(id -u)

if [[ $DOCKER_PROFILE != "-f docker-compose.edge.yml" ]]; then
    DOCKER_PROFILE="-f docker-compose.yml"
fi
