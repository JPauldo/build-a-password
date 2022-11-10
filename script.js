// Assignment Code
var generateBtn = document.querySelector("#generate");
var charArr = [];

// Verifies which character sets the user wants in their password.
function charCheck() {
  var charRange = [];
  var choice = false;
  // Checks if the user wants uppercase letters included.
  if(window.confirm("Would you like uppercase letters in you?")) {
    charRange.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    console.log(charRange);
    choice = true;
  }
  // Checks if the user wants lowercase ones included.
  if(window.confirm("What about lowercase ones?")) {
    charRange.push("abcdefghijklmnopqrstuvwxyz");
    console.log(charRange);
    if(!choice) {
      choice = true;
    }
  }
  // Checks if the user wants numbers included.
  if(window.confirm("Numbers, maybe?")) {
    charRange.push("0123456789");
    console.log(charRange);
    if(!choice) {
      choice = true;
    }
  }
  // Checks if the user wants special characters included.
  if(window.confirm("Special Characters?")) {
    charRange.push("!@#$%^&*");
    console.log(charRange);
    if(!choice) {
      choice = true;
    }
  }
  
  // Checks to see if the user picked at least one of the previous character sets.
  if (choice) {
    console.log(charRange);
    return charRange;
  } else {
    window.alert("We got a real funny guy here! Try picking one the provided options, wise guy.");
    charCheck();
  }
}

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
