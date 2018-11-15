FROM node:10-alpine as builder
LABEL maintainer="Andrey Bakhvalov <bakhvalov.andrey@gmail.com>"

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json", "./"]
RUN npm i

COPY public ./public
COPY src ./src

RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
