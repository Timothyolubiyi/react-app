# command to copy all the libraries of the application
pip freeze >> requirements.txt

# command to build docker images
docker build -t smartgigsctf/image_name .        -- imperative command

docker build -t test_image .
docker run --name game -dp 5000:5007 smartgigsctf/greening

# command to build docker images with docker compose.
$ docker compose up -d                  --- #docker compose

docker-compose logs --follow


# to confirm server is work locally
node .

# command to list out images on your machine
docker images
# command to push images to docker hub
docker push smartgigsctf/image_name
# command to remove image
docker rmi image test_file
# command to create container
docker run -d -p 5009:5009 diamond:latest
# to bring up the running containers
docker ps
# to show all running and stop a running container
docker ps -a
# to a stop container runinng
docker stop container_ID
# command to build a container
docker run --name champion -dp 5008:5008 timothyimage:latest
# to stop running container using container ID
docker stop e256d190a538 - ID
# To delete or remove all built containers
docker rm -vf $(docker ps -a -q)
# To check list of container
docker ps -a
# To access working docker container  
docker exec -it containername sh

.................................