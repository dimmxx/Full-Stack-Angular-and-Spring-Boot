#!/bin/bash
docker stop $(docker ps -aq)
./mvnw verify -Dmaven.test.skip=true jib:build \
&& docker-compose -f src/main/docker/app.yml up
docker ps --format "table {{.ID}}\t {{.Names}}\t {{.Status}}\t {{.Ports}}"
#
# ./mvnw compile jib:build \
