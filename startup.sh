#!/usr/bin/env bash

source setenv.sh

echo -e "Startup Docker"
docker-compose $DOCKER_PROFILE up -d --remove-orphans
