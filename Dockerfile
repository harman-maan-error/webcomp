# Stage 1: Build Storybook
FROM node:18-alpine AS builder

# Set working directory to match your path
WORKDIR /assignment4-webcomponent-library-hsingh20/singh_harmandeep_ui_garden

# Copy package files first for better caching
COPY package*.json ./
COPY .husky ./.husky
COPY eslint.config.js ./
COPY .prettier* ./

# Install dependencies including Storybook
RUN npm install
RUN npx husky install

# Copy all source files
COPY . .

# Run quality checks
RUN npm run format:check
RUN npm test

# Build Storybook static files
RUN npm run build-storybook

# Stage 2: Serve Storybook
FROM nginx:alpine

# Copy built Storybook from builder
COPY --from=builder /assignment4-webcomponent-library-hsingh20/singh_harmandeep_ui_garden/storybook-static /usr/share/nginx/html

# Custom nginx config for Storybook
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8018
EXPOSE 8018

# Start nginx
CMD ["nginx", "-g", "daemon off;"]