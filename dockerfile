# Setup Node
FROM node:14 as build

# Dependency and Build
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

# Create JS Build
# RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]