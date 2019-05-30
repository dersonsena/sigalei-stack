## sigalei backend stack of our application

## Contents
* [Setup](#setup)
* [Commit Rules](#commit-rules)

## Setup
- Install packages with yarn
- Create a .env file, inside api folder, with your postgres connection variables:
  ```
  PG_DATABASE=databasename
  PG_HOST=host
  PG_USERNAME=username
  PG_PASSWORD=password
  PG_PORT=port
  ```
- Create database
  ```
  ./node_modules/.bin/sequelize db:create
  ```
- Acess localhost:5000/test
- Go to schema (upper right) to see our avaiable methods

### [Commit rules](https://github.com/conventional-changelog/commitlint)
