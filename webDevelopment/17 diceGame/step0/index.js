let randomNumber1 = Math.floor(Math.random() * 6 ) + 1; // +1 means shift the value by 1
let randomNumber2 = Math.floor(Math.random() * 6 ) + 1; // +1 means shift the value by 1

// left
const img1 = document.querySelector(".img1")
    .setAttribute("src", "images/dice"+randomNumber1+".png")

// right
const img2 = document.querySelector(".img2")
    .setAttribute("src", "images/dice"+randomNumber2+".png")

console.log(img1);
let result = document.querySelector("h1");
function roll(random1, random2){
   
    if(random1 > random2){
        result.innerHTML = `
            🚩player 1 wins!
        `
    }else if (random1 < random2){
        result.innerHTML = `
            player2 wins!🚩
        `
    }else {
        result.innerHTML = "Draw!"
    }
    
}

roll(randomNumber1, randomNumber2);
