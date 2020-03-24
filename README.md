# HW2 by espresso team

## step 1: start hw1 servers in parallel
Follow README at [https://github.com/sfsu-667-spring-2020/hw1-latte](https://github.com/sfsu-667-spring-2020/hw1-latte).

## step 2: start hw2 servers in parallel
```sh
# required
$ cd client/
$ npm install
$ cd servers/
$ npm install
# you can use docker-compose instead of node / pm2 after executing above commands
$ sudo docker-compose up
```

If `docker-compose` fails to connect to the Docker daemon, ensure the Docker daemon is up (`sudo dockerd`).

- HTTP: `http://localhost:5000/`
