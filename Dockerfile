FROM node:12.18-alpine3.12 as build
WORKDIR /app
COPY . ./
RUN apk add g++ make python && npm install && npm run build && npm prune --production


FROM node:12.18-alpine3.12
WORKDIR /app

COPY --from=build ./app/dist ./dist
COPY --from=build ./app/node_modules ./node_modules
COPY --from=build ./app/package.json ./package.json

ENV PORT=8080
EXPOSE $PORT
CMD ["npm", "run", "start"]