FROM node:alpine
COPY ./app.js /usr/etc/pageserver.js
COPY ./index.html /home/index.html
WORKDIR /home
CMD node /usr/etc/pageserver.js
