#primera etapa
FROM node:16-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

#segunda etapa
FROM nginx:alpine

COPY --from=builder /app/dist/app-paises /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
