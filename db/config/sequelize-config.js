const { config } = require("../../config/app.config");

module.exports = {

    development: {
        username: config.get("postgres.user"),
        password: config.get("postgres.password"),
        database: config.get("postgres.database"),
        host: config.get("postgres.host"),
        dialect: config.get("postgres.dialect"),
        port: config.get("postgres.port")
    },
    test: {
        username: config.get("postgres.user"),
        password: config.get("postgres.password"),
        database: config.get("postgres.database"),
        host: config.get("postgres.host"),
        dialect: config.get("postgres.dialect"),
        port: config.get("postgres.port")
    },
    production: {
        username: config.get("postgres.user"),
        password: config.get("postgres.password"),
        database: config.get("postgres.database"),
        host: config.get("postgres.host"),
        dialect: config.get("postgres.dialect"),
        port: config.get("postgres.port")
    }

}