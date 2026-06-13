import express from "express"; // import express module
const app = express(); // create application
const port = 3000; //port number

// create a route for the home page
app.get("/",(req, res) => {
    res.send("Hello, world!"); // send a response to the client

});


app.listen(port, () => {
    //callback function to log when server is running
    console.log(`Server is running on port ${port}`);

});

/**
 * net stat command to check the port number is running or not 
 * netstat -ano | findstr "LISTENING"
 *  GET --> request resources (could be html websites, piece of text or data. Etc)
    POST --> sending resources (could be user sign in/up forms like email address)
    basically UPDATE --> has two sub put and patch but works slight differently 
    PUT --> replace the resources like completely with new one 
    PATCH --> will add the requirement to the resources which is being need.
    DELETE --> delete the resources 
 * */ 
