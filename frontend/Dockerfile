# Use the official Node.js 20.8.1 image as the base image
FROM node:20.8.1

# Set the working directory
WORKDIR /frontend

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the ports on which the application will run
EXPOSE 3000

# Start the application on both ports
CMD ["npm", "start"]
