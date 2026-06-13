import express from "express";
// getting this 3 lines of code we get the filpath
import { dirname } from "path"; //get the full folder path
import { fileURLToPath } from "url"; // convert the url to normal path

/**
 * 1. import.meta.url --> get current files as URL(file:///...)
 * 2. passed to fileURLToPath(import.meta.url) --> convert URL to normal Path
 * 3. dirname(fileURLToPath(import.meta.url)) --> get folder path from full path
 * finally __driname = folder path 
 * 
*/
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //output: C:\Users\lim\Desktop\WebDev\webDevelopment\webDevelopment\Backend\3.4 Middleware
  console.log(__dirname);
  // folder path + "/public/inde.html"  
  res.sendFile(__dirname + "/public/index.html");
});

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "1mb"}));

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Data received");

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
