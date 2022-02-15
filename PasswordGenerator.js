/*

    Password generator used for quick and easy password creation.
    array of symbols, numbers, and letters and working array

    if includesnumbers append numbers array

    if includessymbols append symbols array 

    count number of password length
    lets assume length is 4
        -count items in array
        -math.random from 1 to amount in array to find value for password character.
        -repeat step 4 times

*/

    let passwordLength = 0;
    let includeNumbers = false;
    let includeSymbols = false;

    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
    let numbers = ['1','2','3','4','5','6','7','8','9','0'];
    let symbols = ['!','@','#','$','%','^','&','*','(',')','_','-','=','+'];
    let workingArray = [];

    let createdPass = [];

function getInputValue() {

    //obtain values from form.
    passwordLength = document.getElementById("length").value;
    includeNumbers = document.getElementById("numbers").checked;
    includeSymbols = document.getElementById("symbols").checked;
    let test = Math.floor((Math.random()*10)+1);

    //use functions created below.
    createWorkingArray();
    generatePassword();

    //print out values to an alert.
    alert(createdPass);

};

function createWorkingArray() {

    //logic for concatting to new array so passwords know what to include.
    if (includeNumbers === true && includeSymbols === true) {
        workingArray = alphabet.concat(numbers, symbols[2]);
    }
    if (includeNumbers === true && includeSymbols === false) {
        workingArray = alphabet.concat(numbers);
    }
    if (includeNumbers === false && includeSymbols === true) {
        workingArray = alphabet.concat(symbols);
    }
    if (includeNumbers === false && includeSymbols === false) {
        workingArray = workingArray.concat(alphabet);
    }

};

function generatePassword() {

    //loop through pass length and generated a random character then remove all commas from the string.
    for (i = passwordLength; i > 0; i--) {
        createdPass = createdPass.concat(workingArray[Math.floor(Math.random()*workingArray.length)]);
    }

    createdPass = createdPass.toString();
    createdPass = createdPass.replaceAll(',', '');

};
