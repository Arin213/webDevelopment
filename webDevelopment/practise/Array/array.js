// Array
/*Collection of items in a box and we can put any data types
almost similar like "list" in python

syntax: 
    let items = [a, b, c, d];
a.retreive data:
    let myItem = items[index]; //index starts with 0

b.total length of array:
    let myLength = items.length;

eg:
*/ 
const prompt = require(`prompt-sync`)();
let items = ["apple", "orange", "banana", "mango"];
// get the desired items
// let myItem = items[0];
let myItem = items[3];
console.log("getting itme using index items[3]: " + myItem);

// total length or items in Array
let totalLength = items.length;
console.log(`Total of length of items using items.length : ${totalLength}`); 

// if the item is in array or not 
// we use items.includes(item's name) and get the boolean value
console.log(`Do we have oragne ?: ${items.includes("orange")}`);

// checking items for every given prompt and if the item is in array then return boolean value 
let input = prompt("Search the Item: ");
console.log(`Do we have ${input}? : ${items.includes(input)}`);


/*
 Adding and Removing items from the array
 Adding:
    syntax: Array.push(item); will append the item at last
 
 removing:
    syntax: Array.poo(item); will remove the item from the last as well

*/

// FizzBuzz problem
/*
    1.first create the empty array output = []
    2. define function where its get called one time and display all the number and fizz and buzz
       and bizzbuzz. range of no.(1,100)
    3. function with no args inside the body loop through from (1,100) 
    4. inside the loop give the condition 
    5. conditon : if divisible by 3 then fizz & if divisible by 5 then buzz and divisible by both then fizzBuzz
    6. number divisible not by 3 nor 5 then push the number else push fizz or buzz or fizzbuzz
    7. finally console.log as array from range of (1,100); 
*/ 
let output = [];
let FizzBuzz = () => {

    for(let i = 1; i <= 100; i++){
        let getFizzBuzz = (i % 3 == 0 && i % 5 == 0) ? "FizzBuzz" :
        i % 3 == 0 ? "Fizz" : i % 5 == 0 ? "Buzz" : i;
        output.push(getFizzBuzz);
        // console.log(getFizzBuzz);
    } 
    console.log(output);
}

FizzBuzz();