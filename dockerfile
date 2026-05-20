FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

ARG NEXT_PUBLIC_POOL_SERVICE_API_URL
ARG NEXT_PUBLIC_HISTORY_SERVER_API_URL
ENV NEXT_PUBLIC_POOL_SERVICE_API_URL=$NEXT_PUBLIC_POOL_SERVICE_API_URL
ENV NEXT_PUBLIC_HISTORY_SERVER_API_URL=$NEXT_PUBLIC_HISTORY_SERVER_API_URL

RUN npx prisma generate

RUN npm run build

FROM node:22-alpine AS migrator
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma       ./prisma

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN apk add --no-cache openssl libssl3

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static     ./.next/static
COPY --from=build /app/public           ./public
COPY --from=build /app/src/generated    ./src/generated
# prisma.config.ts et package.json sont dans le standalone déjà

COPY docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

EXPOSE 3002
ENTRYPOINT ["sh", "docker-entrypoint.sh"]