FROM node:22.15.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm install -g pm2

COPY . .

EXPOSE 3000

CMD ["npm", "start"]