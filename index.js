//importing Express to this Node.js application.
const express = require("express");

//creating an instance of the Express application.
const app = express();

//declaring a constant variable named 'PORT' & assigning it the value '5000', the port number on which the
//server will listen for upcoming connections.
const PORT = 5000;

//listening on the specified port(5000), and once it starts 
//logs a message to the console indicating that the server is up and running on that port.
app.listen(PORT, () => {
    console.log(`The server is up & running on port ${PORT}`);
});