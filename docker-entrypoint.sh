#!/bin/sh
set -e

echo "DATABASE_URL=$DATABASE_URL"

echo "Lancement des migrations Prisma..."
until node node_modules/prisma/build/index.js migrate deploy; do
  echo "DB pas prête, retry..."
  sleep 2
done

echo "Migrations OK, démarrage Next.js..."
exec node server.js
