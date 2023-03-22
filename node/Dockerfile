FROM node:16

RUN apt-get update && \
    apt-get install -y wait-for-it

WORKDIR /app

COPY . .

RUN npm ci

ENV API_PORT=3000

EXPOSE 3000

CMD ["npm", "run", "dev"]
