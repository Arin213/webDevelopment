import express from 'express';
import { v4 as uuidv4 } from "uuid";



const router = express.Router();

// mock DB or fake DB (memory only)
let users = [
    // {
    //     firstName: "John",
    //     lastName: "Doe",
    //     age: 30
    // },

    // {
    //     firstName: "Jane",
    //     lastName: "Doe",
    //     age: 25
    // }
]

// insread of app.get we use router.get
// all routes in here are starting with /users 
// because in index.js we have app.use("/users", userRoutes);
router.get("/", (req, res) => {
    
    // get the mock DB 
    console.log(users); 
    // res.send("hello");
    res.send(users);

});


router.post("/", (req, res) => {
    // if the post success then 
    console.log("post request received");

    // req.body is the data sent by client in post request
    // console.log(req.body);
    
    // push the data to the mock DB
    // shows the data can be sent to the server and stored in the DB
    // save as in memory only, not in real DB i.e server restarts then data will be lost
    const user = req.body;
    // const userId = uuidv4(); // ⇨ 'ab16e731-6cee-424d-81a0-5929e9bdb0cc => randomly generated unique id for user
    // using spread operator to add userID to the user object 
    const userWithId = {...user, ID: uuidv4()};
    users.push(userWithId);
    // res.send("post request received");
    res.send(`User with the name ${user.firstName} added to the database!`);
});

router.get("/:id", (req, res) => {
    const {id} = req.params; // get the id from the request prameters

    // find the specific user with the id in the mock DB
    const foundUser = users.find((user) => user.ID === id);

    //if foundUser match the id then send the user data back to client
    // getting the uer profile we can add or delete the data of the user
    res.send(foundUser); // send response back to client

});

// delete router
router.delete("/:id", (req,res) => {
    const{id} = req.params // get the id from the request prameters

    users = users.filter((user) => {
        // logic of filter: if the condition is true then keep the user in the array, 
        // if false then remove the user from the array
        return user.ID !== id; //if the used.id === id then false. 
    })

    console.log(`the id ${id} is deleted from the database`);
    res.send(users); // send response back to client    

});
/**
 * hey other files! here's my router! take it! use it! 
 * its yours now1
 * like: giving a freind your house key 
 *       sending a package
 * 
 * WITHOUT export: Router hiding.No one sees. No one uses. SAD
 * WITH export: Router PUBLIC! Everyone imports! Everyone uses! HAPPY!
 * 
 * REAL ANALOGY:
Y   our router = Pizza you just made 🍕

    export default router = Putting pizza on table, yelling "EVERYONE COME EAT!"

    No export = Pizza in kitchen, door locked. No one eats. Pizza gets cold. WASTE.
 * */
export default router;

