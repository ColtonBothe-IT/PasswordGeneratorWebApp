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

function getInputValue() {

    //obtain values from form.
    passwordLength = document.getElementById("length").value;
    includeNumbers = document.getElementById("numbers").checked;
    includeSymbols = document.getElementById("symbols").checked;
    let test = Math.floor((Math.random()*10)+1);

    createWorkingArray();

    //print out values to an alert.
    alert(workingArray);

    


};

function createWorkingArray() {
    if (includeNumbers === true) {
        workingArray.push(alphabet, numbers);
    }
    if (includeSymbols === true) {
        workingArray.push(symbols);
    }
    if (includeNumbers === false && includeSymbols === false) {
        workingArray.push(alphabet)
    }

    //make it where alphabet is always pushed first.

};

