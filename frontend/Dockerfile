# Frontend Dockerfile
FROM node:18
LABEL authors="Rocco"

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

# Copy frontend code
COPY . /app

# Expose React dev server port
EXPOSE 3000

# Start React development server
CMD ["npm", "start"]