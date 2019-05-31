## sigalei backend stack of our application

## Contents
* [Setup](#setup)
* [Commit Rules](#commit-rules)

## Setup
- You will need a postgres database, you can learn more about it here in [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)
- Install packages with yarn
- Create a .env file, inside api folder, with your postgres connection variables:
  ```
  PG_DATABASE=databasename
  PG_HOST=host
  PG_USERNAME=username
  PG_PASSWORD=password
  PG_PORT=port
  ```
- Create database (run inside /api folder)
  ```
  ./node_modules/.bin/sequelize db:create
  ```
- Acess localhost:5000/test
- Go to schema (upper right) to see our avaiable methods

### [Commit rules](https://github.com/conventional-changelog/commitlint)
