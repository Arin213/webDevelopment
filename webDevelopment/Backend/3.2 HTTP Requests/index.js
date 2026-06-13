import express from 'express'; // Import the Express library
const app = express(); // Create an Express application
const port = 3001; // set the port number 

// get request handler for the root route
//can accessed by http://localhost:3001/
app.get("/", (req, res) => {
    // console.log(req.rawHeaders); // log the raw headers of the request to the console
    //send a response back to the client
    res.send("<h1>Hello</h1>"); 
    // res.send("Hello, this is a GET request!"); 
});

// getting others routes
// can accessed by http://localhost:3001/about
app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1>");

});



// get the server listening on the specified port
app.listen(port, () => {
    // log a message to the console when the server is running i.e callback function
    console.log(`Server is running on port ${port}`);

});

