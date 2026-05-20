#!/bin/sh
set -e
export DATABASE_URL=postgresql://${DB_USER}:$(cat /run/secrets/db_password)@${DB_HOST}:5432/${DB_NAME}
exec node server.js