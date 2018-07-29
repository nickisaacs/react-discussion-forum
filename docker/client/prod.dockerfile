FROM node:8.11.3-alpine

RUN npm install -g serve

COPY ./app/package.json ./app/package.json
RUN cd client && yarn install

COPY . .
RUN cd app && yarn run build

CMD serve -s ./client/dist