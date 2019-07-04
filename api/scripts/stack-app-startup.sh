#!/bin/bash

if [[ ! -d /home/node/app/node_modules ]]; then
  echo "~> installing dependencies"
  yarn install
fi

echo "~> starting server..."
yarn start