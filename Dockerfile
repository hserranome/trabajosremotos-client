FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

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