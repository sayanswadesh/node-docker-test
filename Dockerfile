FROM node:16-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 4000

CMD [ "npm","run","watch" ]