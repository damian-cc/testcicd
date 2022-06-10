
FROM node:18 AS builder
WORKDIR /www
COPY . .
RUN yarn install && yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /www/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
