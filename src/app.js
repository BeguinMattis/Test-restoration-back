const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const route = require("./routes/route.route");

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/route", route);

app.use((req, res, next) => {
    res.status(404);
    res.send("Path not found!");
});

const port = 8080;
app.listen(process.env.PORT || port, () => {
    console.log("Server is running on port number " + port);
});

module.exports = app;
