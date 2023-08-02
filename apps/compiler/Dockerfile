FROM --platform=linux/amd64 node:18
WORKDIR /usr/src/app

RUN npm init -y
RUN npm install vm2
COPY ./dist ./dist
RUN npm install winglang -g

EXPOSE 3000

CMD [ "node", "dist/index.js" ]