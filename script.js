// Assignment Code 
var generateBtn = document.querySelector("#generate");

// all declared variables are listed below...
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "#", "$", "%", "^", "&", "*", "(", ")", ",", "-", "_", "=", "+"];
var upperCaseConfirm = false;
var lowerCaseConfirm = false;
var specialCharConfirm = false;
var numbersConfirm = false;
var userChoice = [];
var passwordLength = 0;
var finalPassword = "";

// Worked with tutor to create a "while loop" function to circulate through the prompts, to select desired outcome for password criteria.

function generatePassword() {
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        passwordLength = prompt("How Many characters would you like your password to contanin? choose between 8 and 128 characters");
        if (!passwordLength) {
          alert ("must choose a value!");          
        }

  }
  
  while (!upperCaseConfirm && !lowerCaseConfirm && !specialCharConfirm && !numbersConfirm) {
    upperCaseConfirm = confirm("would you like to include upper case letters?");
    lowerCaseConfirm = confirm("would you like to include lower case letters?");
    specialCharConfirm = confirm("would you like to include special characters?");
    numbersConfirm = confirm("would you like to include numbers?");
  }

  if (upperCaseConfirm) {
    userChoice = userChoice.concat(upperCaseLetters);
    finalPassword += rgen (upperCaseLetters); 
  }
  
  if (lowerCaseConfirm) {
    userChoice = userChoice.concat(lowerCaseLetters);
    finalPassword += rgen (lowerCaseLetters); 
  }
  if (specialCharConfirm) {
    userChoice = userChoice.concat(specialCharacters);
    finalPassword += rgen (specialCharacters); 
  }
  if (numbersConfirm) {
    userChoice = userChoice.concat(numbers);
    finalPassword += rgen (numbers); 
  }

  for (var i=finalPassword.length; i<passwordLength; i++) {
    finalPassword += rgen (userChoice)
  }
  return finalPassword;
  }

  // created random array variable to generate random values to display in html document.

  function rgen (randomArray){
   var randomIndex = Math.floor(Math.random() * randomArray.length)
    return randomArray [randomIndex];
  }


  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);