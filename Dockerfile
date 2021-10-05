FROM node:14.17.6-slim

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y ca-certificates

# Copying source files
COPY . .

# Installing dependencies
COPY package*.json ./
RUN npm install

# Building app
RUN npm run build

# Expose ports
EXPOSE 3000

# Running the app
CMD [ "npm", "start" ]