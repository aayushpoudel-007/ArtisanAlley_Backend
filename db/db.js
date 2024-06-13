const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("Database connected" + process.env.DB_URL);
    }).catch((err) => {
        console.log(err);
    });
};

module.exports=db;