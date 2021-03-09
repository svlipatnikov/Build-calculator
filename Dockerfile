FROM node:15.11 as build
WORKDIR /front
COPY package*.json ./
RUN  npm install
COPY . .
RUN npm run build

FROM nginx:1.19.7-alpine as release
WORKDIR /usr/share/nginx/html
COPY --from=build /front/build/ /usr/share/nginx/html/
