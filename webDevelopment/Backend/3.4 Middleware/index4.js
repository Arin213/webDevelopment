import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const app = express();
const port = 3000;

// get the full path 
const __dirname = dirname(fileURLToPath(import.meta.url));

// use of morgan 
// app.use(morgan("combined"));
app.use(morgan("dev"));

// get method 
app.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/index.html", (err) => {
    if (err) {
      console.error("File send error:", err);
      res.status(500).send("Error loading page");
    }
  });
});

//body praser
app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "1mb"})); 

// post method 
// app.post("/submit", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   res.send(
//     `<h1>Your band name is:</h1>
//     <p><b>${data.street}${data.pet}<b></p>`
//   );
// });

app.post("/submit", (req, res) => {
  const { street, pet } = req.body; // Destructure!
  
  if (!street || !pet) {
    return res.status(400).send("<h1>ERROR! Missing street or pet!</h1>");
  }
  
  res.send(`
    <!DOCTYPE html>
    <html>
      <head><title>Your Band Name</title></head>
      <body>
        <h1>🎸 Your band name is:</h1>
        <p><strong>${street}${pet}</strong></p>
        <a href="/">Go back</a>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
