FROM node:12.18-alpine3.12 as build
WORKDIR /app
COPY . ./
RUN npm install && npm run build && npm prune --production


FROM node:12.18-alpine3.12
WORKDIR /app

COPY --from=build ./app/dist ./dist
COPY --from=build ./app/proto ./proto
COPY --from=build ./app/node_modules ./node_modules

ENV PORT=8080
EXPOSE $PORT
CMD node dist/main.js