CREATE DATABASE postgres;
CREATE USER postgres with password 'postgres' SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE postgres TO postgres;