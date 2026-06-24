import express from 'express';
import { userRouter, postUser, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// insread of app.get we use router.get
// all routes in here are starting with /users 
// because in index.js we have app.use("/users", userRoutes);
router.get("/", userRouter); // get all users from the mock DB

router.post("/", postUser); // add a new user to the mock DB

router.get("/:id", getUser);
// delete router
router.delete("/:id", deleteUser);

/**
 * for update we can use put or patch method
 * PUT: use for the COMPLETE modification of the user data. 
 * if we want to update the whole user data then we can use put method
 * PATCH: use for the PARTIAL modification of the user data. 
 * if we want to update only some fields of the user data then we can use patch method
 * 
 * */ 
// update the router
router.patch("/:id", updateUser);

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

