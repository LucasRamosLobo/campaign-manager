FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/node_modules ./node_modules

COPY --from=build /app ./

CMD ["sh", "-c", "npx sequelize-cli db:migrate --config src/config/config.json --migrations-path src/migrations --models-path src/models && npm start"]

EXPOSE 3000
