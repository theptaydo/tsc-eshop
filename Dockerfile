FROM node:16

EXPOSE 3000

WORKDIR /app

RUN npm i

COPY package.json package-lock.json ./

run npm isntall

COPY . .

CMD ["node ", "index.js"]