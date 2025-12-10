# Drum Kit Project

## Description
This project is a simple drum kit web application that allows users to play different drum sounds by clicking on buttons or pressing specific keys on their keyboard.

## Features
- Clickable drum buttons with corresponding sounds
- Keyboard shortcuts for playing drum sounds
- Visual feedback when a button is clicked or a key is pressed

## How to Use

### Playing with Buttons
1. Open the HTML file in a web browser.
2. Click on any of the drum buttons to play the corresponding sound.

### Playing with Keyboard
1. Open the HTML file in a web browser.
2. Press any of the following keys on your keyboard to play the corresponding drum sound:
   - `w`: Crash sound
   - `a`: Kick Bass sound
   - `s`: Snare sound
   - `d`: Tom 1 sound
   - `j`: Tom 2 sound
   - `k`: Tom 3 sound
   - `l`: Tom 4 sound

## Code Explanation

### HTML Structure
The HTML file contains a series of buttons with the class `drum`. Each button has a text content that corresponds to a key on the keyboard.

### JavaScript Logic
The JavaScript code handles both click events on the buttons and keydown events on the keyboard. It uses an object `drumSounds` to map keys to their corresponding sound file paths.

#### Click Event
- When a button is clicked, the `btn.addEventListener("click", (e) => { ... })` function is triggered.
- The function changes the button's text color to white and plays the corresponding sound using the `Audio` object.
- The previous button's text color is reset to its original color.

#### Keydown Event
- When a key is pressed, the `document.addEventListener("keydown", (e) => { ... })` function is triggered.
- The function checks if the pressed key is one of the valid keys (`w`, `a`, `s`, `d`, `j`, `k`, `l`).
- If the key is valid, it plays the corresponding sound using the `Audio` object.

## Dependencies
- No external libraries are required. This project uses plain HTML, CSS, and JavaScript.

## Credits
- The drum sounds are sourced from a local `sounds` directory.
- The project is inspired by the JavaScript Drum Kit exercise from the [The complete full-stack web Development Bootcamp](https://www.udemy.com/) course by Dr.Angela yu.


## Contact
For any questions or feedback, please contact [unsung.apricity01@gmail.com](mailto:unsung.apricity01@gmail.com).