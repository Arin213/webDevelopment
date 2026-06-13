//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

// solution
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import morgan from "morgan";


// get the filepath
const __dirname = dirname(fileURLToPath(import.meta.url));

// middle wares 
// const  
// create express app 
const app = express();
const port = 3000

// create the custom middle ware 
function logger(req, res, next) {
    console.log(`Request: ${req.method} ${req.url}`);
    next();
}

app.use(logger); // use the custom middle ware
// app.use(morgan("dev")); //run after the app.get run
// creating routes
app.get("/", (req, res) => {
    // get the full file path
    // console.log(__dirname);
    res.sendFile(__dirname + "/public/index.html", (err) => {
        if (err) {
            console.log("File send Error:", err);
            res.status(500).send("Error Loading Page!");
        }
    });
});

// using praser in express instead of body praser middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// route for post

app.post("/check", (req, res) => {
    const password = req.body.password;
    console.log(password);
    if (password === "ILoveProgramming") {
        res.sendFile(
            `${__dirname}/public/secret.html`
        );
    } else {
        // res.status(400).sendFile(
        //     `${__dirname}/public/index.html`
        // );
        res.redirect("/");  
    }

});

// listening port 
app.listen(port, () => {
    console.log(`The server is at  port: ${port} `);

});