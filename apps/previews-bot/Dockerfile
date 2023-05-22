FROM public.ecr.aws/lambda/nodejs:18
WORKDIR ${LAMBDA_TASK_ROOT}

COPY ./package.json ./
RUN npm install

COPY ./src ./src
COPY ./handler.ts ./
COPY ./tsconfig.json ./
RUN npm run build

RUN npm i -g aws-cdk@2.79.1

CMD ["./lib/handler.handler"]