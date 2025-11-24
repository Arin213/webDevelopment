function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num2 == 0 ? "Zero Division Error! " : num1 / num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

// high order function - passing function as arg inside the function 
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

// envoke or call function 
console.log(calculator(2,4, add));
console.log(calculator(2,4, multiply));
console.log(calculator(2,4, divide));
console.log(calculator(2,0, divide));
console.log(calculator(2,4, subtract));