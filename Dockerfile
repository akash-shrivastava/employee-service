FROM node:12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
COPY package.json .
RUN npm config set -g production true
RUN npm install
COPY app ./app
COPY db ./db
COPY app.js .
ENTRYPOINT ["npm", "start"]