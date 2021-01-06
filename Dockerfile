FROM node:10

ARG API_URL
ARG WEB_URL
ARG STRIPE_KEY

ENV API_URL=$API_URL
ENV WEB_URL=$WEB_URL
ENV STRIPE_KEY=$STRIPE_KEY

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