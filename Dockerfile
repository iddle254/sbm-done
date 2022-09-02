FROM node:16.12.0

# Create app directory
RUN mkdir -p /usr/src/sbm-clone
WORKDIR /usr/src/sbm-clone

# Install app dependencies
COPY package.json /usr/src/sbm-clone
RUN npm install

# Bundle app source
COPY . /usr/src/sbm-clone

# Build arguments
ARG NODE_VERSION=16.12.0

# Environment
ENV NODE_VERSION $NODE_VERSION

# # pull official base image
# FROM node:13.12.0-alpine

# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g --silent

# # add app
# COPY . ./

# # start app
# CMD ["npm", "start"]