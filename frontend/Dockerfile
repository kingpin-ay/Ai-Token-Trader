# Node working block
FROM node:alpine3.18 as nodeWork
WORKDIR /app
COPY package.json .

RUN npm install
COPY . .
RUN npm run build


# Nginx Working block
FROM nginx:1.9.15-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodeWork /app/dist .
ENTRYPOINT [ "nginx" , "-g" , "daemon off;" ]
