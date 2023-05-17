# FROM public.ecr.aws/lambda/nodejs:18
# WORKDIR ${LAMBDA_TASK_ROOT}

# COPY ./package.json ./
# RUN npm install

# COPY ./index.ts ./
# RUN npm run build
    
# RUN cp ./dist/* ./

# CMD ["index.handler"]


FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./index.ts ./

EXPOSE 3000

CMD [ "npm", "start" ]