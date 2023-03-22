FROM nginx:latest

RUN apt-get update && \
    apt-get install -y wait-for-it

CMD [ "nginx", "-g", "daemon off;" ]