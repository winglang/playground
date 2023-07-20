FROM node:20-alpine as Builder

WORKDIR /app

COPY . .

RUN ["npm", "install"]

FROM node:20-alpine

WORKDIR /app

COPY . .
COPY --from=builder /app/node_modules /app/node_modules

EXPOSE 3000

CMD ["node", "/app/dist/index.js"]