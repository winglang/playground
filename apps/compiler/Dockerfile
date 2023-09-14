FROM public.ecr.aws/lambda/nodejs:18-x86_64
WORKDIR ${LAMBDA_TASK_ROOT}

ARG WING_VERSION="0.0.0"

COPY ./package.json ./
RUN npm install

COPY ./index.ts ./
RUN npm run build
    
RUN cp ./dist/* ./

CMD ["index.handler"]