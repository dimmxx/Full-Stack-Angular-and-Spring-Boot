docker stop $(docker ps -aq)
docker ps --format "table {{.ID}}\t {{.Names}}\t {{.Status}}\t {{.Ports}}"
