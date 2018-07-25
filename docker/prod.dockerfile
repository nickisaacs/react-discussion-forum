FROM node:8.11.3-alpine

RUN npm install -g serve

COPY ./client/package.json ./client/package.json
RUN cd client && yarn install

COPY . .
RUN cd client && yarn run build

CMD serve -s ./client/dist