# Sample dev env setup

Containing a frontend and a nodejs backend, running as a single stack within containers.

File watchers are activated too.

This is a highly unoptimised setup for sure, especially regarding dependencies...

## Install and run

Just type at the root of the project:

```
$ docker-compose up --build
```

The proxy will run on `http://localhost:3000` :
- route `/` -> client-side app 
- route `/api` -> server-side app

Notice that the client-side app has a file watcher (react-scripts app).
