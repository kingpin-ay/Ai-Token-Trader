FROM node
WORKDIR /app
COPY . .

RUN npm install
RUN npm install pm2 -g
RUN npm install serve -g
RUN npm run build

CMD [ "pm2" , "serve" , "dist/" , "80" , "-spa"]

