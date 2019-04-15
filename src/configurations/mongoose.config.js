const mongoose = require("mongoose");
const environment = require("../environments/environment");

const uri = "mongodb://" + environment.database.user + ':' + environment.database.password + '@' +
    environment.database.host + ':' + environment.database.port + '/' + environment.database.name;

mongoose.connect(uri, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connection open to " + uri);
});

mongoose.connection.on("error", (err) => {
    console.error("Connection error: " + err);
});
