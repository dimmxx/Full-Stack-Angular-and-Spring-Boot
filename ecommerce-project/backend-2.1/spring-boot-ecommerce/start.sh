./mvnw clean compile jib:build \
&& docker-compose -f src/main/docker/app.yml up
docker ps --format "table {{.ID}}\t {{.Names}}\t {{.Status}}\t {{.Ports}}"
