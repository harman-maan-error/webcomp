# Dockerfile for React Storybook
# Stage 1: Build Storybook
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build Storybook for production
RUN npm run build-storybook

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Custom working directory name
WORKDIR /singh_harmandeep_ui_garden

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built Storybook from previous stage to nginx directory
COPY --from=build /app/storybook-static /usr/share/nginx/html

# Expose port 8083
EXPOSE 8083

# Configure nginx to use port 8083
RUN sed -i 's/80;/8083;/' /etc/nginx/conf.d/default.conf

# Start nginx
CMD ["nginx", "-g", "daemon off;"]