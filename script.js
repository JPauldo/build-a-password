// Assignment Code
var generateBtn = document.querySelector("#generate");
var charsetArr = [];

// Verifies which character sets the user wants in their password.
function charCheck() {
  var choice = false;
  
  // Checks if the user wants uppercase letters included.
  if(window.confirm("Would you like uppercase letters in you?")) {
    charsetArr.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    choice = true;
  }
  // Checks if the user wants lowercase ones included.
  if(window.confirm("What about lowercase ones?")) {
    charsetArr.push("abcdefghijklmnopqrstuvwxyz");
    if(!choice) {
      choice = true;
    }
  }
  // Checks if the user wants numbers included.
  if(window.confirm("Numbers, maybe?")) {
    charsetArr.push("0123456789");
    if(!choice) {
      choice = true;
    }
  }
  // Checks if the user wants special characters included.
  if(window.confirm("Special Characters?")) {
    charsetArr.push("~?!@#$%^&+-*=");
    if(!choice) {
      choice = true;
    }
  }
  
  // Checks to see if the user picked at least one of the previous character sets.
  if (choice) {
  } else {
    window.alert("We got a real funny guy here! Try picking one the provided options, wise guy.");
    charCheck();
  }
}

// Checks the length provided is a valid.
function checkIfInRange(length) {
  // Passwords must be at least 8 characters long.
  if (length < 8) {
    window.alert("Maybe make it a bit longer than 7.");
    generatePassword();
  } 
  // Passwords must be under 129 characters.
  else if (length >= 128) {
    window.alert("Has to be under 129, my dude.");
    generatePassword();
  } else {
    charCheck();
  }
}

// Checks to see if the password generated thus far has the desired charsets. If not, it adds the missing ones.
function charsetValidator(code) {
  charsetArr.forEach(element => {
    if(![...code].some(char => [...element].includes(char))) {
      code += element.charAt(Math.floor(Math.random() * element.length));
    }
  });
  
  return code;
}

// Builds a password.
function generatePassword() {
  var passcode = "";
  
  // Propmts the user to provide a length for their password.
  var charLength = Number(window.prompt("How long would you like your password?: [Note: The range is between 8 and 128.]"));
  
  // Checks to see if the value provide is a number.
  if(Number.isFinite(charLength)) {
    checkIfInRange(charLength);
  }
  else {
    window.alert("Try using a number next time, forehead.");
    generatePassword();
  }

  for(var i = 0; i < charLength; i++) {
    // Generates and stores a random index for the charsetArr array.
    if(charsetArr.length > 1 && i == charLength-(charsetArr.length-1)) {
      passcode = charsetValidator(passcode);

      // Checks to see if the charsetValidator function completed the passcode. If not, it continues to build it.
      if(passcode.length === charLength) {
        break;
      }
      else if(passcode.length > i) {
        continue;
      }
    }
    // Picks a random charset and stores their index.
    var charsetIndex = Math.floor(Math.random() * charsetArr.length);
    
    // Uses the charsetIndex variable to pick a random character set.
    var charGroup = charsetArr[charsetIndex];
    
    // Picks a random character from the character set to add to the password.
    passcode += charGroup.charAt(Math.floor(Math.random() * charGroup.length));
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
