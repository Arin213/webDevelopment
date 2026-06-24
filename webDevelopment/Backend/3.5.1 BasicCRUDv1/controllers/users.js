import { v4 as uuidv4 } from 'uuid';
import fs from "fs";
import path from "path";

/**
 * process.cwd() --> current working directory.project's main folder return "/Users/me/myProject" 
 * user.son() ---> the file name 
 * path.json ---> glue them together in one adresses: eg: "C:/myProject/user.json"
 * 
 * */
const filePath = path.join(process.cwd(), "user.json");

// Read users from the JSON file 
let users = JSON.parse(fs.readFileSync(filePath, "utf8"));
/**
 * fs → The built-in Node.js "File System" module. It has tools to poke files.

   .readFileSync() → "Open the file RIGHT NOW, read everything inside, and give me back one giant string." 
   The Sync means "I'm not doing anything else until you finish reading."

   filePath → The address we built earlier.

  'utf8' → "Decode the raw bytes into readable text (like letters and numbers), not garbage." Without this, you get weird binary <> stuff.

   Now you have a string that looks like '[{"name":"Alex"},{"name":"Bob"}]'.

   JSON.parse() → "That's just text, but I KNOW it's JSON format. Turn that text into a real JavaScript array or object that I can loop over or modify."

   let users = → Store that shiny new array/object into a variable called users.

   Silly take: "Go find the file, suck out all the text, decode it to human letters, then magically transform that text into a real live data structure I can poke."
 
* */ 

// helper function to save users to file
const saveUsersToFile = () => {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));


};
/**
 * fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
 * Breakdown from inside out:

    users → The live JavaScript array/object we have in memory.

    JSON.stringify(users, null, 2) →

    "Reverse the magic!" Turn that live array/object back into a plain text string.

    null → "I don't need a replacer function, just do the default."

    2 → "When you write it, add 2 spaces of indentation so it looks pretty and human-readable, not one ugly long line."

    Now you have a string again, like '[\n {"name":"Alex"},\n {"name":"Bob"}\n]'.

    fs.writeFileSync(filePath, ... ) →

    "Take this text string, go to the file at filePath, ERASE everything currently in that file, and write this new text in its place."

    The Sync means "Wait until the writing is 100% done before moving on to the next line of code."

    Silly take: "Crush my live data back into a plain text string, pretty it up with spaces, then violently overwrite the entire file with this new text."

    The Main Difference from Python (just the facts):

    Python's open().read() + json.load() = Node's fs.readFileSync() + JSON.parse()

    Python's json.dump() + open().write() = Node's JSON.stringify() + fs.writeFileSync()

    Node uses Sync to mean "blocking / wait for it" – just like Python's normal file read/write does by default.


*/
// create an array as MOCK DB
// let users = [];

// add the user with ID
export const postUser = (req, res) => {
    const user = {
        id: uuidv4(),
        ...req.body
    };
    users.push(user);
    saveUsersToFile() // save to file
    res.status(201).json(user);
}

//get users 
export const getUsers = (req, res) => {

    res.send(users);
};

// get user id
export const getUserID = (req, res) => {

    const {id} = req.params; //express.json as middleware will parse the request body and make it available in req.body

    // find the user with the id in the mock DB
    // if found then send the user data back to client
    const foundUserId = users.find((user ) => user.id === id);
    res.send(foundUserId);

};

// delete user
export const userDelete = (req, res) => {
    const {id} = req.params;

    users = users.filter((user) => {
        return user.id !== id;
    });
    saveUsersToFile() // save to file 
    console.log(`the id ${id} is deleted from the database`);
    res.send(users);
};


// adding patch or update user
export const updateUser = (req, res) => {
    const{id} = req.params;
    const {fristName, lastName, age} = req.body; //destructuring to get firstName, lastName and age from req.body
    const updateUser = users.find((user) => user.id === id);
    if(fristName) updateUser.fristName = fristName;
    if(lastName) updateUser.lastName = lastName;
    if(age) updateUser.age = age;

    saveUsersToFile() // save to file 
    console.log(`the id ${id} is updated in the database`);
    res.send(updateUser); // send response back to client with the updated user data


}