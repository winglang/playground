FROM node:20 as Builder

WORKDIR /app

COPY . .

RUN ["npm", "install"]

FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app

COPY . .
COPY --from=builder /app/node_modules /app/node_modules

EXPOSE 3000

CMD ["/app/dist/index.js"]