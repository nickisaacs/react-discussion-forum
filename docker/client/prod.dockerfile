FROM node:8.11.3-alpine

COPY ./app/package.json ./app/package.json
COPY ./app/yarn.lock ./app/yarn.lock
RUN cd app && yarn install

COPY . .

RUN cd app && yarn run build

WORKDIR ./app

EXPOSE 3000
CMD ["yarn","run","start"]