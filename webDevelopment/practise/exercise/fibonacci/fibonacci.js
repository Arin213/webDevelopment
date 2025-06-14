/*
    The Fibonacci Exercise
Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

Where every number is the sum of the two previous ones.

e.g. 0, 1, 1, 2, 3, 5 comes from

0 + 1 = 1

1 + 1 = 2

1 + 2 = 3

2 + 3 = 5

etc.

Create a function where you can call it by writing the code:

fibonacciGenerator (n)

Where n is the number of items in the sequence.

So I should be able to call:

fibonacciGenerator(3) and get

[0,1,1]

as the output.

IMPORTANT: The solution checker is expecting an array as the correct output.

Do NOT change any of the existing code.

You do NOT need any alerts or prompts, the result should be returned from the function as an output.

The first two numbers in the sequence must be 0 and 1.

Also, if you decide to create a for loop, make sure you explicitly specify var i = 0 rather than simply writing i = 0 . This is a quirk of the testing suite.

e.g. for (var i = 0; i < 10; i ++)


*/

/*
    solution:
    1. first create function called fibonacciGenerator(n) where n is the number of
    items in sequence and array called Fsequence[] 
    2. create the for loop and start with 0 
    3. push the 0 and 1 item to the Fseqeunce
    4. now when the item is 2 then use the formula for getting the previous sequence 
    like (n-1) + n -2 and push it to the Fsequence until the item reach to n 

*/

let fibonacciGenerator = (n) => {
    let Fseqeunce = [];
    // take loop to get the number to n
    for (let i = 0; i < n; i++) {
        if (i <= 1) {
            Fseqeunce.push(i);
        } else {
            // 3-1 = 2 or Fseq[2] = 1 +  3-2 or fseq[1] = 1  
            let num = Fseqeunce[i - 1] + Fseqeunce[i - 2];
            Fseqeunce.push(num);
        }

    }
    return Fseqeunce;
}

console.log(fibonacciGenerator(6));