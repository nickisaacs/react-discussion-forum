FROM node:8.11.3-alpine

COPY app/package.json /usr/src/app/package.json
COPY app/yarn.lock /usr/src/app/yarn.lock
RUN cd /usr/src/app && yarn install

WORKDIR /usr/src/app

EXPOSE 3000
CMD ["yarn", "run", "develop"]