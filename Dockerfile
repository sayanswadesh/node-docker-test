FROM node:16-alpine

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 4000

CMD [ "node","index.js" ]