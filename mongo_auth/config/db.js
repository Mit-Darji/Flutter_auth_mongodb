const mongoose = require("mongoose");

const connect = mongoose.createConnection("mongodb://127.0.0.1:27017/simple_db").on("open",() => {
    console.log('Connected to MongoDB');
}).on("error",() => {
    console.log("mongodb connection error");
});

module.exports = connect;