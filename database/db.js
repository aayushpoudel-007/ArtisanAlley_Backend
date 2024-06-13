require('dotenv').config();
console.log('dotenv loaded successfully');
console.log('db_url:', process.env.db_url);

const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.db_url).then(() => {
        console.log("Connected to the database");
    }).catch(err => {
        console.error("Error connecting to the database:", err);
    });
}

module.exports = connectDB;
