# Use the official Node.js image with Alpine Linux
FROM node:alpine

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy app files
COPY . .

# Install app dependencies
RUN npm install && npm run build

# Run the application
CMD ["npm", "start"]