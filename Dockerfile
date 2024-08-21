# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/go/dockerfile-reference/

# Want to help us make this template better? Share your feedback here: https://forms.gle/ybq9Krt8jtBL3iCk7

ARG NODE_VERSION=20.15

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

ARG MONGO_URL
ENV MONGO_URL=$MONGO_URL
ARG SERVER_URI
ENV SERVER_URI=$SERVER_URI

# Set working directory for all build stages.
WORKDIR /app


################################################################################
# Create a stage for installing production dependecies.
FROM base as deps

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage bind mounts to package.json and package-lock.json to avoid having to copy them
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

################################################################################
# Create a stage for building the application.
FROM deps as build

ARG MONGO_URL
ENV MONGO_URL=$MONGO_URL
ARG BUILD_ID
ENV BUILD_ID=$BUILD_ID


# Download additional development dependencies before building, as some projects require
# "devDependencies" to be installed to build. If you don't need this, remove this step.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci


# Copy the rest of the source files into the image.
COPY . .
# Run the build script.
RUN VITE_SEVER_URI="/" BUILD_TIME=$(date) BUILD_ID=$BUILD_ID npm run build

################################################################################
# Create a new stage to run the application with minimal runtime dependencies
# where the necessary files are copied from the build stage.
FROM base as final

ARG MONGO_URL
ENV MONGO_URL=$MONGO_URL
# Use production node environment by default.
ENV NODE_ENV production

# RUN npm i -g vite

# Run the application as a non-root user.
USER node

# Copy package.json so that package manager commands can be used.
# COPY package.json ./
# RUN npm install


# Copy the production dependencies from the deps stage and also
# the built application from the build stage into the image.
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist


# Expose the port that the application listens on.
COPY . .
EXPOSE 3000


# CMD ['npm', 'run', 'dev']

# Run the application.

# CMD npm start

# Set the working directory in the container
WORKDIR /app

# Start the app
# CMD [ "node","server.cjs" ]
# CMD [ "sh","-c","npm run dev & PORT=3000 node server.cjs" ]
CMD [ "sh","-c","PORT=3000 node server.cjs"]