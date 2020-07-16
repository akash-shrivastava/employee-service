const convict = require("convict");

const config = convict({
    app:{
        doc: "App name",
        default: "Employee Service",
        env:"APP_Name"
    },
    http:{
        port:{
            doc: "port to listen",
            default: 3000,
            env:"EMPLOYEE_PORT"
        }
    },
    postgres:{
        user:{
            doc: "Username",
            default: "postgres",
            env:"POSTGRES_USERNAME"
        },
        password:{
            doc: "password",
            default: "postgres",
            env:"POSTGRES_PASSWORD"
        },
        host:{
            doc: "hostname",
            default: "localhost",
            env:"POSTGRES_HOST"
        },
        database:{
            doc: "database name",
            default: "postgres",
            env:"POSTGRES_DATABASE"
        },
        port:{
            doc: "postgres port number",
            default: 5432,
            env:"POSTGRES_PORT"
        },
        dialect:{
            doc: "determine the sql engine",
            default: "postgres",
            env:"POSTGRES_DIALECT"
        }
    },
    test:{
        url:{
            doc: "endpoint of employee service",
            default: "http://localhost:3000/employee-service/",
            env:"TEST_ENDPOINT"
        }
    }
});

config.validate();

module.exports = {
    config
};