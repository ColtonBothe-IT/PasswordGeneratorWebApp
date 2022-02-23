    let passwordLength = 0;
    let includesLowercase = false;
    let includesUppercase = false;
    let includeNumbers = false;
    let includeSymbols = false;

    let alphabetLowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
    let alphabetUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
    let numbers = ['1','2','3','4','5','6','7','8','9','0'];
    let symbols = ['!','@','#','$','%','^','&','*','(',')','_','-','=','+'];
    let workingArray = [];

    let createdPass = [];

function getInputValue() {

    //obtain values from form.
    passwordLength = document.getElementById("length").value;
    includesLowercase = document.getElementById("lowercase").checked;
    includesUppercase = document.getElementById("uppercase").checked;
    includeNumbers = document.getElementById("numbers").checked;
    includeSymbols = document.getElementById("symbols").checked;
    //let test = Math.floor((Math.random()*10)+1);

    //use functions created below.
    createWorkingArray();
    generatePassword();

    //print out values to an alert.
    document.getElementById('my-brand').innerHTML = createdPass;
    createdPass = [];
    workingArray = [];
    includesLowercase = false;
    includesUppercase = false;
    includeNumbers = false;
    includeSymbols = false;
};

function createWorkingArray() {

    //logic for concatting to new array so passwords know what to include.
    if (includeNumbers === true && includeSymbols === true  && includesLowercase === true && includesUppercase === false) {
        workingArray = alphabetLowercase.concat(numbers, symbols);
    }
    if (includeNumbers === true && includeSymbols === false && includesLowercase === true && includesUppercase === false) {
        workingArray = alphabetLowercase.concat(numbers);
    }
    if (includeNumbers === false && includeSymbols === true && includesLowercase === true && includesUppercase === false) {
        workingArray = alphabetLowercase.concat(symbols);
    }
    if (includeNumbers === false && includeSymbols === false && includesLowercase === true && includesUppercase === false) {
        workingArray = workingArray.concat(alphabetLowercase);
    }
    if (includeNumbers === true && includeSymbols === true && includesLowercase === false && includesUppercase === true) {
        workingArray = alphabetUppercase.concat(numbers, symbols);
    }
    if (includeNumbers === true && includeSymbols === false && includesLowercase === false && includesUppercase === true) {
        workingArray = alphabetUppercase.concat(numbers);
    }
    if (includeNumbers === false && includeSymbols === true  && includesLowercase === false && includesUppercase === true) {
        workingArray = alphabetUppercase.concat(symbols);
    }
    if (includeNumbers === false && includeSymbols === false && includesLowercase === false && includesUppercase === true) {
        workingArray = workingArray.concat(alphabetUppercase);
    }
    if (includeNumbers === true && includeSymbols === true && includesLowercase === true && includesUppercase === true) {
        workingArray = alphabetLowercase.concat(numbers, symbols, alphabetUppercase);
    }
    if (includeNumbers === true && includeSymbols === false && includesLowercase === true && includesUppercase === true) {
        workingArray = alphabetLowercase.concat(numbers, alphabetUppercase);
    }
    if (includeNumbers === false && includeSymbols === true  && includesLowercase === true && includesUppercase === true) {
        workingArray = alphabetLowercase.concat(symbols, alphabetUppercase);
    }
    if (includeNumbers === false && includeSymbols === false && includesLowercase === true && includesUppercase === true) {
        workingArray = workingArray.concat(alphabetLowercase, alphabetUppercase);
    }
    if (includeNumbers === true && includeSymbols === true && includesLowercase === false && includesUppercase === false) {
        workingArray = workingArray.concat(numbers, symbols);
    }
    if (includeNumbers === true && includeSymbols === false && includesLowercase === false && includesUppercase === false) {
        workingArray = workingArray.concat(numbers);
    }
    if (includeNumbers === false && includeSymbols === true && includesLowercase === false && includesUppercase === false) {
        workingArray = workingArray.concat(symbols);
    }

};

function generatePassword() {

    if (includeNumbers === true || includeSymbols === true || includesLowercase === true || includesUppercase === true) {
         //loop through pass length and generated a random character then remove all commas from the string.
        for (i = passwordLength; i > 0; i--) {
            createdPass = createdPass.concat(workingArray[Math.floor(Math.random()*workingArray.length)]);
        };
    }
    else {
        createdPass = 'Please select at least one checkbox.'
    };
    createdPass = createdPass.toString();
    createdPass = createdPass.replaceAll(',', '');

};
