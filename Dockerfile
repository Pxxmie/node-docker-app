# Use an official Node.js runtime as a base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies first
COPY package.json .
RUN npm install

# Copy the application files
COPY . .

# Expose the application port
EXPOSE 3000

# Define the default command to run the app
CMD ["node", "server.js"]