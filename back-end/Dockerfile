ARG NODE=8

FROM node:$NODE-alpine

WORKDIR /code

COPY package*.json /code/

RUN npm install

COPY . /code/