FROM node:18
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
COPY ./index.ts ./

RUN npm install winglang -g

EXPOSE 3000

CMD [ "npm", "start" ]