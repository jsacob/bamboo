# 1. Build Vite app
FROM node:20-bullseye AS build

WORKDIR /app

# Copy only package files first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies (clean)
RUN npm ci

# Copy the rest of the project
COPY . .

# Build the Vite project
RUN npm run build

# 2. Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
