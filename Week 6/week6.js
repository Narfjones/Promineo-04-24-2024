const alphabetString = 'abcdefghijklmnopqrstuvwxyz';

let alphabetArray = []; // Array to be filled by loop
let backwardsAlpha = []; // Array to be filled in reverse loop function

// takes each element from string and adds it to alphabetArray array
function alpha(){
    for(i = 0; i < alphabetString.length; i++){
        alphabetArray[i] = alphabetString[i];
    }
    console.log('loop happened. move along.') // logs to console when loop is complete
}

alpha(); // runs function

// Takes element of string in reverse order and adds it to backwardsArray
function backwards(){
    for(i = alphabetString.length - 1; i >= 0; i--){
        backwardsAlpha[alphabetString.length - i] = alphabetString[i];
    }
}

// returns the number of the alphabet in which you find the letter provided as argument
function whatPosition(letter){
    if(typeof(letter) == 'string' && letter.length == 1){ // check to make sure data sent is single character string
    console.log(alphabetArray.indexOf(letter) + 1); // print location in alphabet
    } else {
        console.log('Please enter a single character') // error for incorrect datatype
    }
}

whatPosition('a');

backwards();

whatPosition('a');