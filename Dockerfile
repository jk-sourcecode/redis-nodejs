FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ["package.json", "/usr/src/app"]
COPY ["index.js", "/usr/src/app"]
COPY ["lib", "/usr/src/app/lib"]

RUN npm install -proxy http://zscaler.emirates.com:10068
EXPOSE 5050
CMD [ "npm", "start" ]