FROM node:20 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:latest

COPY --from=build app/dist/pcic_web_dashboard /usr/share/nginx/html

EXPOSE 80
