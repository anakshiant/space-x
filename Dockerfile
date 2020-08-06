FROM node:12.16.0-alpine as builder

ENV NODE_ENV development

WORKDIR /web-app

COPY package.json .

COPY yarn.lock .

RUN yarn install

RUN yarn global add next

COPY . .

RUN yarn build

CMD ["yarn", "dev"]

FROM node:12.16.0-alpine

ENV NODE_ENV production


WORKDIR /web-app

COPY --from=builder /web-app .

EXPOSE $PORT

CMD ["yarn", "start:prod"]