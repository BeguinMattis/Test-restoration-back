const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("./configurations/mongoose.config");

const routeRoutes = require("./routes/route.route");
const authenticationRoutes = require("./routes/authentication.route");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/route", routeRoutes);
app.use("/authentication", authenticationRoutes);

/* app.use((err, req, res) => {
    if ((err) && (err.name === "UnauthorizedError")) {
        res.status(401);
        res.json({error: err});
    }
});

app.use((req, res, next) => {
    const error = new Error("Path not found!");
    error.statusCode = 404;
    next(error);
});

app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({error: err});
}); */

const port = 8080;
app.listen(process.env.PORT || port, () => {
    console.log("Server is running on port number: " + port);
});

module.exports = app;
