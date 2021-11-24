FROM node:12-alpine 
WORKDIR /usr/src/app/frams
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve"]