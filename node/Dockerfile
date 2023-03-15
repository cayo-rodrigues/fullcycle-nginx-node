FROM node:16-alpine

RUN apk update

WORKDIR /app

COPY . .

RUN npm ci

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "dev"]
