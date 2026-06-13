import express from "express";
const app = express(); //cerate the instance of express
const port = 3000;

// create the app home routes
app.get("/", (req, res) => {
    res.send("get the root!");

});

// creat the route for /contact and /about routes 
app.get("/contact", (req, res) => {
    res.send("contact");

});

// creat for /about
app.get("/about", (req, res) => {
    res.send("about");

});

// listen to the port number 
app.listen(port, () => {
    // callback function of running port numebr
    console.log(`The server is running successfully on port ${port}`);
})