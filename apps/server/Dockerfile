FROM node:20 as Builder

WORKDIR /app

COPY . .

RUN ["npm", "install"]

WORKDIR /app/wing

RUN ["npm", "install"]

FROM gcr.io/distroless/nodejs20-debian12:nonroot

WORKDIR /app

COPY --chown=nonroot:nonroot . .
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/wing/node_modules /app/wing/node_modules

EXPOSE 3000

CMD ["/app/dist/index.js"]