FROM node

#RUN mkdir /app
WORKDIR /

COPY . .
RUN npm i

#RUN npm run build

EXPOSE 3333
CMD ["npm","run","dev"]