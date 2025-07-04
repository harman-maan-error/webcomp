# Stage 1: Build the Storybook static files
FROM node:20 AS build

# Set working directory
WORKDIR /usr/src/singh_harmandeep_ui_garden

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build storybook static files (adjust if your build command differs)
RUN npm run build-storybook

# Stage 2: Serve the static files using nginx
FROM nginx:alpine

# Copy the built storybook static files to nginx default public folder
COPY --from=build /usr/src/singh_harmandeep_ui_garden/storybook-static /usr/share/nginx/html

# Expose port 80 in container
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
