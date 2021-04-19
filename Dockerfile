FROM node:12

WORKDIR /app

COPY  package*.json ./

RUN npm i

COPY . .

EXPOSE 8000

CMD ["npm","start"]