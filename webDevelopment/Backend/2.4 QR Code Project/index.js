/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      message: 'Enter the url:',
      name: 'url'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    const qr_svg = qr.image(answers.url, {type: 'png'}); //type is default by png so no need if its png format
    // Save it to a file 
    qr_svg.pipe(fs.createWriteStream('qr_img.png')); //create qr image 

    // Save it into the text file 
    fs.writeFile("URL.txt", answers.url, (err) => {
        if (err) throw err;
        console.log(" URL saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      // Something else went wrong
      console.log("Something else went wrong");
    }
  });
