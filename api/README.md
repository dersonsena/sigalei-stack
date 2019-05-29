## sigalei frontend and backend stack of our application

## Setup
- Install packages with yarn
- Create a .env file with your postgres connection variables:
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
- Acess localhost:3000/test
- Go to schema (upper right) to see our avaiable methods
## Contents
* [General](#general)
* [Commit Rules](#commit-rules)

## General
- [ ] CI with CircleCI
- [ ] lerna
- [ ] add app_common
- [x] add commit rules
- [ ] add precommit verifications

## API
- [x] api
- [x] new server structure to api
- [x] graphql-playground
- [x] sequelize
- [ ] api unit tests
- [ ] security improvements
- [ ] public and private schemas

## React
- [ ] add react
- [ ] jest
- [ ] try hooks
- [ ] main components

### [Commit rules](https://github.com/conventional-changelog/commitlint)
