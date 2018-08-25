FROM node:8.11.3-alpine

WORKDIR /usr/src/app

EXPOSE 3000
CMD ["yarn", "run", "develop"]