FROM node:20-alpine as Builder

WORKDIR /app

COPY . .

RUN ["npm", "install"]
RUN ["npm", "run", "build"]

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/app/dist /app/app/dist
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/wing /app/wing

EXPOSE 3000

CMD ["node", "/app/dist/index.js"]