import express from "express";
import {fileURLToPath} from "url";
import { dirname } from "path";

import userRoutes from "./routes/users.js";
// create express app and port number 
const app = express();
const port = 3000;

// to get the current directory name
// const __dirname = dirname(fileURLToPath(import.meta.url));

// prase data using express bui
// lt in middleware
app.use(express.json());

// run imported route
app.use("/users", userRoutes);

// create the route  
app.get("/", (req, res) => {
    res.send("hello got response was successfully");

});

// make app to listen poet 
app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});

// to parse json data from request body
// app.use(express.json());