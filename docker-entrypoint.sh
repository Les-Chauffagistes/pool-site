#!/bin/sh
set -e

export DATABASE_URL=postgresql://${DB_USER}:$(cat /run/secrets/db_password)@${DB_HOST}:5432/${DB_NAME}

echo "Applying migrations..."
until npx prisma migrate deploy; do
  echo "DB pas prête, retry..."
  sleep 2
done

echo "Migrations OK, starting..."
exec node server.js -H 0.0.0.0