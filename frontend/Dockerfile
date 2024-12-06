# Use Node for building the React app
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code and build it
COPY . .
RUN npm run build

# Use Nginx to serve the app
FROM nginx:alpine

# Copy build files to Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
