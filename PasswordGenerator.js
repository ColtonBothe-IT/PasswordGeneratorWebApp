/*
    Password generator used for quick and easy password creation.
*/

function getInputValue() {

    //obtain values from form.
    let passwordLength = document.getElementById("length").value;
    let includeNumbers = document.getElementById("numbers").checked;
    let includeSymbols = document.getElementById("symbols").checked;

    //print out values to an alert.
    alert(passwordLength+"\r"+includeNumbers+"\r"+includeSymbols);

}
