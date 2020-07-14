const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();
const db = require('./db/models/index');

app.use(bodyParser.urlencoded({limit: "1mb", extended: true}));
app.use(bodyParser.json({limit: "1mb", extended: true}));
app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept" );
    next();
});

const server = app.listen(3000, ()=> {
    console.log("Server started at port 3000");
});

require("./app/routes/app.routes")(router);
db.sequelize.sync();
app.use("/employee-service/",router);