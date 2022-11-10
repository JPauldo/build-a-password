// Assignment Code
var generateBtn = document.querySelector("#generate");
var charArr = [];

// Builds a password.
function generatePassword() {
  var passcode = "";
  
  // Propmts the user to provide a length for their password.
  var charLength = Number(window.prompt("How long would you like your password?: [Note: The range is between 8 and 128.]"));
  
  // Checks to see if the value provide is a number.
  if(Number.isFinite(charLength)) {
    charArr = checkIfInRange(charLength);
  }
  else {
    window.alert("Try using a number next time, forehead.");
    generatePassword();
  }

  return passcode;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
