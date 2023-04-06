FROM alpine

RUN apk update
RUN apk add nodejs
RUN apk add npm

RUN mkdir /root/app
WORKDIR /root/app
COPY * /root/app

RUN npm install
EXPOSE 3000

CMD npm start
