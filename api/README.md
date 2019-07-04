## Sigalei Backend Stack of our application

## Contents
* [Setup](#setup)
* [Commit Rules](#commit-rules)

## DOCKER SETUP

You need of the Docker and Docker Compose instaled and configured in your computer. For more details of the how to install and configure docker, please, follow the oficial documentation: [https://docs.docker.com/install](https://docs.docker.com/install)

Follow the below steps do startup all needed services of the application.

### 1 - Create the `.env` file

Inside `/api` folder, copy the [.env.sample](https://github.com/sigalei/sigalei-stack/blob/master/api/.env.sample) file, rename to `.env` and setup your variables if needs. Follow the example below:

```
# Docker Settings
DOCKER_PG_PORT=5432
DOCKER_PGADMIN_PORT=5050
DOCKER_APP_PORT=5000
DOCKER_APP_ENV=development

# App Settings
API_SECRET=your-secret-key

# Postgres Database Settings
PG_DATABASE=challenge
PG_HOST=sigalei-stack-db
PG_USERNAME=postgres
PG_PASSWORD=secret
PG_LOGGING=false

REACT_SCHEMA_FOLDER="../../../react/schema.graphql"
```

With this `.env` file you should be able to startup the application. If you have port conflicts, just change them in this file.

### 2 - Startup the Containers

With the `.env` configured, just run the command:

```
docker-compose up -d --build
```

If you are running this command for the first time this should take a few minutes as some customizations are made to the official docker image to meet the project specifications. See more in the [Dockerfile](https://github.com/sigalei/sigalei-stack/blob/master/api/.docker/node.dockerfile).

### 3 - More Details

In this point you have three services in your disposition:

- **API:** run the `http://localhost:5000/test` or `http://localhost:5000/graphql` to have access directly in API;

- **PostgreSQL Database**: your database will run in the host `127.0.0.1` port `5432` (as environment `DOCKER_PG_PORT`)

- **[PgAdmin](https://www.pgadmin.org/):** run the `http://localhost:5050` and you'll have the a graphic interface to the PostgreSQL Database. As the connection is made from this container to the Postgresql container, at the moment of setting up your connection you must put the name of the container on the host, here's an example:

```
Host: sigalei-stack-db
Port: 5432
Username: postgres # as PG_USERNAME environment
Password: secret # as PG_PASSWORD environment
Database: challenge # as PG_DATABASE environment
```

## STANDALONE SETUP
- You will need a postgres database, you can learn more about it here in [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)
- Install packages with yarn
- Inside `/api` folder, copy the .env.sample file, rename to .env and setup your postgres connection variables. Follow the example below:
```
# Docker Settings
DOCKER_PG_PORT=5432
DOCKER_PGADMIN_PORT=5050
DOCKER_APP_PORT=5000
DOCKER_APP_ENV=development

# App Settings
API_SECRET=your-secret-key

# Postgres Database Settings
PG_DATABASE=challenge_database
PG_HOST=localhost
PG_USERNAME=postgres
PG_PASSWORD=
PG_PORT=5432
```

- Create database (run inside /api folder)
  ```
  ./node_modules/.bin/sequelize db:create
  ```
- Acess localhost:5000/test
- Go to schema (upper right) to see our avaiable methods

### [Commit rules](https://github.com/conventional-changelog/commitlint)
