FROM postgres:9.4
COPY shared-service/schema.sql /docker-entrypoint-initdb.d/