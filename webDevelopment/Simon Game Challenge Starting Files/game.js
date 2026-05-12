// alert("its working");
// array of button colors
let buttonColors = ["red", "blue", "green", "yellow"];

// create empty arry 
let gamePattern = [];
let userClickedPattern = [];

// cerate the flags or boolean values
let gameStarted = false;
// let animatingSequence = false;



// select the button and class
let button = document.querySelectorAll(".btn");
// console.log("button:", button);

// let buttonClass = document.querySelector(".green");
// console.log("buttonClass: ", buttonClass.id);



//get the sound key:value pair
let getSound = {
    "blue": "sounds/blue.mp3",
    "green": "sounds/green.mp3",
    "red": "sounds/red.mp3",
    "wrong": "sounds/wrong.mp3",
    "yellow": "sounds/yellow.mp3"

}



// function to generate random number and color:
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    console.log("randomChosenColor: ", randomChosenColor);
    gamePattern.push(randomChosenColor);
    animateFlash(randomChosenColor);
    playsound(randomChosenColor);
}


console.log(gamePattern);
// function to play sound 
function playsound(color) {
    // let audio = new Audio(getSound[gamePattern[gamePattern.length - 1]]); //  should be random sound 
    // audio.play();
    let audio = new Audio(getSound[color]);
    audio.play();
}

// opacity animation for sequence
function animateFlash(currentColor) {
    let button = document.getElementById(currentColor);
    button.classList.add("flash");
    setTimeout(function () {
        button.classList.remove("flash");
    }, 100);
}



// function to play sound for user clicks
function playsoundForUser(color) {
    let audio = new Audio(getSound[color]);
    audio.play();
}


// opacity animation for user presses
function animatePress(currentColor) {
    let button = document.getElementById(currentColor);
    button.classList.add("pressed");
    setTimeout(function () {
        button.classList.remove("pressed");
    }, 100);
}



/**
 * the first key press starts the game, and then 
 * the nextSequence function is called to generate the first color in the sequence. 
 * The game will continue to generate new colors in the sequence each time 
 * the user successfully follows the pattern.
 * */

// Game triggering event listenrer for key to start the game 
document.addEventListener("keydown", function (e) {
    // check if the gameStarted flag is false, if so start the game and 
    // made the gameStarted flag true to prevent multiple starts
    if (!gameStarted) {
        gameStarted = true;
        document.getElementById("level-title").textContent = "Level 1";
        nextSequence();
    }
});


button.forEach(btn => {
    btn.addEventListener("click", function (event) {

        // check if the game has started and flag is true
        if (gameStarted) {
            let userChosenColor = this.id; //this = the btn that wasa clicked
            /**
             * When you click the GREEN button:
                this = <div id="green" class="btn green"></div>
                this.id = "green"

                When you click the RED button:
                this = <div id="red" class="btn red"></div>
                this.id = "red"
            * */
            userClickedPattern.push(userChosenColor);
            animatePress(userChosenColor);
            playsoundForUser(userChosenColor);
            console.log("User clicked: ", userChosenColor);

            // Check if this click was correct
            checkAnswer(userClickedPattern.length - 1);
        }


    });

});

//function to check if user anser is correct
function checkAnswer(currentLevel) {

    /**Scenario 1: User clicks CORRECTLY
        userClickedPattern[currentLevel] === gamePattern[currentLevel] → ✓ TRUE
        Enters the if block
        Checks nested condition:
        If lengths don't match → function ends, 
        waits for next click (nothing happens)
        If lengths match → nextLevel() is called

    Scenario 2: User clicks INCORRECTLY
        userClickedPattern[currentLevel] === gamePattern[currentLevel] → ✗ FALSE
        else block runs immediately → game over, no matter what
        So the else block only runs if the click was wrong. 
        If the click is correct but the sequence isn't complete yet, 
        the function just silently ends and waits for the user's next click.
     * */
    // check if the user's current click matches the game pattern at that postion 
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

        // check if user completed the entire sequence 
        if (userClickedPattern.length === gamePattern.length) {
            /**ONLY call the nextLevel function after the length of userClickedPattern matches the length of gamePattern
             * This ensures that the user has completed the entire sequence before advancing to the next level. 
             * */
            setTimeout(nextLevel, 1000);
        }
        //  if lengths don't match, functions just ends (does nothing, wait for the next click)
    } else {
        // only runs if the FIRST conidtion is flase 
        // wrong! PLay worng sound and end game 
        console.log("Wrong");
        playsound("wrong");
        gameOver();
    }
}


// function to advance to next level
function nextLevel() {
    // clear user's click for the new level
    userClickedPattern = [];

    // Update the level title to show current level
    let currentLevel = gamePattern.length;
    document.getElementById("level-title").textContent = "Level " + currentLevel;

    //  Add a new random button to the sequence
    nextSequence();
}


// function to handle game over
function gameOver() {
    // Reset the game
    gameStarted = false;
    gamePattern = [];
    userClickedPattern = [];

    // show game over message
    document.getElementById("level-title").textContent = "Game Over! Press Any Key to Restart";
}
