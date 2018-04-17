#!/usr/bin/env bash

source setenv.sh

docker-compose stop
docker-compose rm -f
echo "Remove dangling volumes!"
docker volume rm -f $(docker volume ls -f dangling=true)
echo "Ok!"
