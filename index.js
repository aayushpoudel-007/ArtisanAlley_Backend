//importing Express to this Node.js application.
const express = require("express");
const connectDB = require("./database/db");

//creating an instance of the Express application.
const app = express();

//declaring a constant variable named 'PORT' & assigning it the value '5000', the port number on which the
//server will listen for upcoming connections.
const port = 5000;

//listening on the specified port(5000), and once it starts 
//logs a message to the console indicating that the server is up and running on that port.
app.listen(port, () => {
    console.log(`The server is up & running on port ${port}`);
});

//creating a test route
app.get("/", (req, res) => 
{
    res.send("Route works")
});

connectDB();