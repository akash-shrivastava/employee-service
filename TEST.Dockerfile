FROM node:12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/
COPY package.json .
RUN npm config set production true
RUN npm install
COPY app ./app
COPY config ./config
COPY test ./test
CMD npm test