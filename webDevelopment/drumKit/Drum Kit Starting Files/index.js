// // document.querySelector("button")
// //     .addEventListener("click", handledClick);

// // function handledClick() {
// //     alert("i was clicked");
// // }

// let state = {
//     prevButton: null,
//     current: null,
//     keyPrevButton: null,
//     keyCurrent: null
// }

// function clear() {
//     // state.prevButton = null;
//     state.current = null;
//     state.keyCurrent = null;
// }
// // use anomious
// document.querySelectorAll(".drum") //class drum 
//     .forEach((btn, index) => {
//         // console.log(btn.textContent);
//         btn.addEventListener("click", (e) => {

//             // let getTarget = btn.textContent;
//             // state.current = getTarget;

//             // console.log("prev", state.prevButton);
//             if (state.prevButton) {
//                 state.prevButton.style.color = "#DA0463"
//                 clear();

//             }

//             if (state.prevButton || state.current === null) {
//                 // console.log("target :", e.target);
//                 btn.style.color = "white";
//                 state.prevButton = btn;
//                 // console.log("prev", state.prevButton);

//             }

//             // this.style.color = "white"; //doesn't work with arrow function instead work in regular function 
//             // const drumSounds = {
//             //     'w': 'sounds/crash.mp3',
//             //     'a': 'sounds/kick-bass.mp3',
//             //     's': 'sounds/snare.mp3',
//             //     'd': 'sounds/tom-1.mp3',
//             //     'j': 'sounds/tom-2.mp3',
//             //     'k': 'sounds/tom-3.mp3',
//             //     'l': 'sounds/tom-4.mp3'
//             // }


//             // CONSTRUCTOR FUNCTION 
//             /** this is simply the constructor function approach it is not neccsary to 
//              * implement the consctructor function. We can direclty get the value from the object key 
//              * as audio file path and put the file path  in audio file and call the audio method
//              * */
//             // function DrumSounds(sound) {
//             //     this.sound = sound;

//             // }


//             // // let key = e.target.textContent.toLowerCase(); //ouptut w or a or s or d or j or k or l 
//             let key = btn.textContent.toLowerCase(); //ouptut w or a or s or d or j or k or l 
//             // // console.log("getkey", key);

//             let sound = new DrumSounds(drumSounds[key]);
//             let audioFile = drumSounds[key]; // get the value of any key  w -- l [for w = sounds/crash.mp3]
//             // let audioFile = sound.sound;
//             // // console.log(audioFile);
//             if (audioFile) {
//                 let audio = new Audio(audioFile); // audio object will take the audio and play clicked one.
//                 audio.play();
//             }

//         });



//     });

// const drumSounds = {
//     'w': 'sounds/crash.mp3',
//     'a': 'sounds/kick-bass.mp3',
//     's': 'sounds/snare.mp3',
//     'd': 'sounds/tom-1.mp3',
//     'j': 'sounds/tom-2.mp3',
//     'k': 'sounds/tom-3.mp3',
//     'l': 'sounds/tom-4.mp3'
// }

// function DrumSounds(sound) {
//     this.sound = sound;

// }

// console.log("keydown event fired....");

// document.addEventListener("keydown", (e) => {
//     console.log("event fired : ", e.key);
//     let key = e.key.toLowerCase();
//     if (['w', 'a', 's', 'd', 'j', 'k', 'l'].includes(key)) {
//         let audioFile = drumSounds[key];
//         if (audioFile) {
//             let audio = new Audio(audioFile); // audio object will take the audio and play clicked one.
//             audio.play();
//         }

//     }
//     // console.log(audioFile);

// });




/**
 * Adds another event listener that executes a callback when a specific event type occurs.
 * @param {string} typeOfEvent - The type of event to listen for (e.g., 'keypress')
 * @param {Function} callback - The function to execute when the event occurs
 * @param {Object} callback.eventHappened - The event object passed to the callback
 * @param {string} callback.eventHappened.eventType - The type of event that occurred
 * @param {string} callback.eventHappened.key - The key that was pressed
 * @param {number} callback.eventHappened.durationKeyPress - The duration of the key press in milliseconds
 * @returns {void}
 */
function addAnotherListener(typeOfEvent, callback) {
    let eventHappened = {
        eventType:"keypress",
        key:"p",
        durationKeyPress:2
    }
    if(eventHappened.eventType === typeOfEvent){
        callback(eventHappened);

    }
}

addAnotherListener("keypress", (e) => {
    console.log(e);

}) ;