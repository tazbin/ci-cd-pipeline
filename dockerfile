FROM node:20-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

FROM base as development
EXPOSE 3000
CMD [ "npm", "run", "dev" ]

FROM development as test
CMD [ "npm", "run", "test" ]

FROM base as production
RUN npm ci --omit=dev
EXPOSE 3000
CMD [ "npm", "run", "start" ]