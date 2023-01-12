# develop-nodejs-in-docker
No need to install nodejs, npm locally on your computer, develop nodejs in docker containers

## Don't need to install tools on local drive
You don't need to install any development tools like NodeJS, NPM locally on your computer.

It would make your life easier if you change computer or OS (say change from Linux to Mac OS), you don't need to download and install the development tools again and also don't need to worry about the versioning, compatibility issues on different platforms.

## Everything is in docker
All development environment and runtime is in docker container, you just save your source code on your local drive (use docker volumes to share it between container and local drive)

## Prerequisition
You just need to have docker installed on your system

## How to start

Install all packages (it will create a node_modules folder on local drive)
```
$ make install

```

Start the app
```
$ make start
```

Get into the container
```
$ make bash
```

## References
https://medium.com/hackernoon/a-better-way-to-develop-node-js-with-docker-cd29d3a0093