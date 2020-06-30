* Install docker-engine for ubuntu by using the link https://docs.docker.com/engine/install/ubuntu/

* Install docker-compose for ubuntu by using the link https://docs.docker.com/compose/install/ (linux)

	
* Run docker containers and other docker scripts
	- Run 'sudo docker-compose up -d' at the same directory of docker-compose.yml for runing and upping containers. (Be sure exposed ports in the docker-compose are not used by another processes.)
  	- Run 'sudo docker-compose down' at the same directory of docker-compose.yml for stopping containers.
  	- Run 'sudo docker-compose ps' at the same directory of docker-compose.yml for seeing status of containers.
  	- Run 'sudo docker container ls -a' at the same directory of docker-compose.yml for seeing information about containers.
  	- Run 'sudo docker container logs <container_name>' at the same directory of docker-compose.yml for seeing log of the containers.
  	- Run 'sudo docker exec -it <container_name> bash' at the same directory of docker-compose.yml for logging to bash of the container.
  	- Run 'sudo docker container prune' at the same directory of docker-compose.yml for removing volume of stopped containers.

* Exposed REST API is defined below for gettin total courier distance of courier with id
	- GET localhost:5000/numbers/{id}
	- GET localhost:5000/numbers/max
	- GET localhost:5000/numbers/min
	- GET localhost:5000/numbers?order=desc or localhost:5000/numbers?order=asc or localhost:5000/numbers 
	- POST localhost:5000/numbers/{id}
	- DELETE localhost:5000/numbers/{id}
	
	

