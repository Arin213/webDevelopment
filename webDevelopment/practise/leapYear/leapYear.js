/*
Leap Year Challenge Exercise
💪This is a Difficult Challenge 💪

Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.

This is how to work out whether if a particular year is a leap year:

A year is a leap year if it is evenly divisible by 4 ;

except if that year is also evenly divisible by 100;

unless that year is also evenly divisible by 400.



e.g. Is the year 2000 a leap year?:

2000 ÷ 4 = 500 (Leap)

2000 ÷ 100 = 20 (Not Leap)

2000 ÷ 400 = 5 (Leap!)



So the year 2000 is a leap year.

But the year 2100 is not a leap year because:

2100 ÷ 4 = 525 (Leap)

2100 ÷ 100 = 21 (Not Leap)

2100 ÷ 400 = 5.25 (Not Leap)



Warning your output should match the Example Output format exactly, even the positions of the commas and full stops.



Example Input 1

2400
Example Output 1

Leap year.


Example Input 2

1989


Example Output 2

Not leap year.


// get reasoning :
so to be leap year the given year must be divisible by 4 and it the year 
is divisible by further 100 then must be furhter divisible by 400 then it is leap year 
however, the year divisible by 4 but not 100 then also leap year 

//algortithm 
1. prompt the user to insert the year
2. check if the year divisible by 4 and 100 and 400 then it is leap year
3. check if the year divisible by 4 and 100 but not 400 then it is not leap year
4. check if the year is divisible by 4 but not 100 then it is leap year.
*/ 

const prompt = require(`prompt-sync`)();
let checkLeapYear = (year) => {
    if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0){
        return "Leap year.";
    } else if (year % 4 == 0 && year % 100 == 0 && year % 400 != 0){
        return "Not leap year.";
    } else if (year % 4 != 0){
        return "Not leap year.";
    }
    return "Leap year."

};

console.log(checkLeapYear(parseInt(prompt("Enter year: "))));