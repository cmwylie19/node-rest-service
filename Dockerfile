FROM node

RUN mkdir /app
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm i && npm i -g typescript ts-node

COPY . .

RUN npm run build

EXPOSE 3333
CMD ["npm","start"]