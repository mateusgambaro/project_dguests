FROM node:14-alpine
WORKDIR /frontend
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD [ "npm", "start" ]
