// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var userInput = parseInt(window.prompt("Amount of characters"));
    var lower = window.confirm('Include lowercase?');
    var upper = window.confirm('Include Uppercase?');
    var numbers = window.confirm('Include Numbers?');
    var special = window.confirm("Include Special Characters?");
    if (userInput < 8 || userInput > 128 || isNaN(userInput)) {
        alert("Please enter vaild length min 8 - max 128.")
        return ""
    }
    // ! - not
    // && - and
    // || - or
    if (!lower && !upper && !numbers && !special) { //false !
        alert("Choose an option.")
        return;
    }

    var userSelection = []
    if (lower) { //lower to be true
        let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        userSelection = userSelection.concat(myArray)

    }
    if (upper) {
        let myArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
        userSelection = userSelection.concat(myArray)

    }
    if (numbers) {
        let myArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        userSelection = userSelection.concat(myArray)

    }
    if (special) {
        let myArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', ',', '<', '>', '?', ':', '/'];
        userSelection = userSelection.concat(myArray)

    }
    console.log(userSelection);
    var passwordValue = "";
    for (var i = 0; i < userInput; i++) {
        const randomElement=userSelection[Math.floor(Math.random()*userSelection.length)]; 
        passwordValue += randomElement
     }
     console.log(passwordValue);

return passwordValue;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

