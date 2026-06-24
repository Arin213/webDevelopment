import express from 'express';

//import the router
import userRoutes from "./routes/users.js";

const PORT = 3000;
const app = express();
// middleware to get the data from the body of the request
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
})

// Attach all routes from users.js
// under the URL prefix /users
app.use("/users", userRoutes);

//call the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));