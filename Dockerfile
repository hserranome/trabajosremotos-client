FROM node:10

# Setting working directory
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
