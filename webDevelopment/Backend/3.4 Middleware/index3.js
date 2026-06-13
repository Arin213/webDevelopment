import express from "express";
import morgan from "morgan"; //npm package for logging

// custom middlewares
function logger(req, res, next) {
  // console.log("before logger");
  console.log(`req.method : ${req.method}`);
  console.log(`req.url: ${req.url}`);
  next();
}
const app = express();
const port = 3000;
app.use(logger);

// third party middleware
// console.log("using morgan");
// app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
