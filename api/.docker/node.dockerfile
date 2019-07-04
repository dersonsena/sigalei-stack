FROM node:10.16.0-alpine
MAINTAINER Kilderson Sena

RUN apk add --update \
    python \
    python-dev \
    py-pip \
    build-base \
  && pip install virtualenv \
  && rm -rf /var/cache/apk/*

WORKDIR /home/node/app
USER node

CMD sh /home/node/app/scripts/stack-app-startup.sh