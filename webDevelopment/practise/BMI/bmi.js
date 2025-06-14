/*
BMI Calculator Advanced (IF/ELSE)
Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

Write a function that outputs (returns) a different message depending on the BMI.



BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."


IMPORTANT the message wording has to match precisely for the code to pass the validation. Including punctuation and capitalisation.

Forumula for calculation:
BMI = weight(kg)/ height(m)^2
*/ 

const prompt = require('prompt-sync')();
let bmiCalulator = (weight, height) => {
    let bmi = Math.round(weight /(height * height));
    return (bmi < 18.5) ? `Your BMI is ${bmi}, so you are underweight`:
    (bmi >= 18.5 && bmi <= 24.9) ? `Your BMI is ${bmi}, so you have a normal weight`:
    `Your BMI is ${bmi}, so you are overweight`;

};
const weight = parseFloat(prompt("Enter your weight: "));
const height = parseFloatprompt("Enter your height: ");
console.log(bmiCalulator(weight, height));