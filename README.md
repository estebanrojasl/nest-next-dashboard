## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev
```

### Build docker

```
$ docker-compose build
```

### Run docker

```
$ docker-compose run -p "3000:3000" api
```

### Open in browser

```
http://localhost:3000/
```

### Bash script to build and run the app

1. Make sure to be on the root of the project my-app
2. Be patient, it might take about 5 mins

```
#!/bin/bash

# run the build command
docker-compose build

# start the Docker Compose application in the background
docker-compose up -d

# wait for the application to start up
sleep 200

# get the IP address of the Docker container running the application
ip=localhost:3000

# open the application in the default web browser
if [[ "$(uname -s)" == "Linux" ]]; then
    xdg-open "http://$ip"
elif [[ "$(uname -s)" == "Darwin" ]]; then
    open "http://$ip"
elif [[ "$(uname -s)" == "MINGW"* ]]; then
    start "http://$ip"
else
    echo "Unable to detect OS"
fi

```
