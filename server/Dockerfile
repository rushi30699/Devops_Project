# Use the base image with Node.js 20.8.1 installed
FROM node:20.8.1-alpine

# Set the working directory to /backend
WORKDIR /server

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies, including nodemon as a development dependency
RUN npm install --save-dev nodemon

# Copy the rest of the backend code to the container
COPY . .

# Run tests during the build process
# RUN npm test

# Expose the port that the application will run on
EXPOSE 8090

# Start the backend server using nodemon
CMD ["npm", "run", "dev"]