###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine As development
WORKDIR /usr/src/app
COPY package.json yarn.lock./
RUN yarn
COPY . .
RUN yarn build
CMD ["node", "dist/main"]