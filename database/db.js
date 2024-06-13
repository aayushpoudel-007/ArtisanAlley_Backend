const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.db_url).then(() => {
        console.log("Connected to the database");
    })
}

module.exports = connectDB;
