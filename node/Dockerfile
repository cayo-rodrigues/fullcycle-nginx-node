FROM node:16

RUN apt update

WORKDIR /app

COPY . .

RUN npm ci

ENV PORT=3000

EXPOSE 3000

CMD ["npm", "run", "dev"]
