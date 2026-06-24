
import router from "express";
import { getUsers, postUser, getUserID, userDelete,updateUser } from "../controllers/users.js";

const route = router.Router();

// create a user
route.post("/", postUser);

// get all users
route.get("/", getUsers);

// get the User with the sepcific ID;
/**
 *  /:id = "Wildcard! Variable! ANYTHING can go here!"

    Translation: "Hey Express! When someone puts ANYTHING after /users/, capture it and call it id!"
    /:id catches EVERYTHING after /users/!
 * */ 
route.get("/:id", getUserID);

route.delete("/:id", userDelete);

// update user
route.patch("/:id", updateUser);
// export the router
export default route;
