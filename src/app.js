const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const routeRoutes = require("./routes/route.route");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/route", routeRoutes);

app.use((req, res, next) => {
    res.status(404);
    res.json({error: "Path not found!"});
});

const port = 8080;
app.listen(process.env.PORT || port, () => {
    console.log("Server is running on port number: " + port);
});

module.exports = app;
