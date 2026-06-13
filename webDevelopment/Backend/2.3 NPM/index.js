
/**
 * for this one confifuration is needed in package.json
 * "type": "commonjs"
 * this allows us to use the old syntax for importing modules
*/
// var generateName = require('sillyname'); 

/**
  for this one confifuration is needed in package.json
 * "type": "module"
 * this allows us to use the new syntax for importing modules
 * without this we would have to use the old syntax which is commented out above
 * */ 
// syntaxt for using modules
// import obejt/method name from "packagename"
import generateName from "sillyname";
const name = generateName();
console.log(`My name is ${name}`);


// problem
// Install superheroes package and use it to generate a random superhero name
// solution
import {randomSuperhero} from "superheroes";
// console.log(superheroes);
const mySuperHeroName = randomSuperhero();
console.log(`My superhero name is ${mySuperHeroName}`);