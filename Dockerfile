# Use the exact Node.js version
FROM node:20.9.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the port your app will run on
EXPOSE 3005

# Command to start the application
CMD ["npm", "run", "dev"]
