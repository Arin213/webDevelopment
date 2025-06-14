/*
Who's Buying Lunch? Code Challenge
You are going to write a function which will select a random name from a list of names. 
The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log. 
The output should match the example output exactly, including capitalisation and punctuation.

Example Input

["Angela", "Ben", "Jenny", "Michael", "Chloe"]
Example Output

Michael is going to buy lunch today!
*/ 

/*
    solution:
    1.first take the list of name and use random function to get the index of 
    list of names randomly 
    2. and returned name should be console.log with the exrta texts.

*/ k
let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
let WhosPaying = (names) => {
    // floor will number round to the nearest integer   
    // * N(number) is the range of random number to get from 0 to N
    let getName = names[Math.floor(Math.random() * names.length)]; 
    console.log(`${getName} is going to buy lunch today!`);

}

WhosPaying(names);