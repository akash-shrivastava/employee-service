CREATE DATABASE employee;
CREATE USER employee_user with password 'employee' SUPERUSER;
GRANT ALL PRIVILEGES ON DATABASE employee TO employee_user;