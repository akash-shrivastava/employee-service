FROM postgres:9.4
COPY schema.sql  /docker-entrypoint-initdb.d/