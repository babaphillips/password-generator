// Assignment code here
var generateBtn = document.querySelector("#generate");

var uppercaseCharacters = ["A", "B", "C"];
var lowercaseCharacters = ["a", "b", "c"];
var numberCharacters = ["0", "1", "2","3","4","5","6","7","8","9"];
var symbolsCharacters = ["!", "@", "#"];

function generatePassword() {
  var selectedCharacters = [];

  // 1. Prompt the user for the password criteria

  //  a. Password length 8 < 128
  var length = Number(prompt("How many characters for your password?"));

  if (isNaN(length) || length < 8 || length > 128) {
    length = Number(
      prompt(
        "Length must be at least 8 characters and more than 128 characters."
      )
    );
  }

  //  b. Lowercase, uppercase, numbers, special characters
  var uppercase = confirm("Would you like to use uppercase letters?");
  var lowercase = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");

  // 2. Validate the input
  if (!uppercase && !lowercase && !numbers && !symbols) {
    alert("Please select one option!");
    return null;
  }

  // 3. Generate password on criteria

  if (uppercase) {
    selectedCharacters = selectedCharacters.concat(uppercaseCharacters);
  }
  if (lowercase) {
    selectedCharacters = selectedCharacters.concat(lowercaseCharacters);
  }
  if (numbers) {
    selectedCharacters = selectedCharacters.concat(numberCharacters);
  }
  if (symbols) {
    selectedCharacters = selectedCharacters.concat(symbolsCharacters);
  }

  console.log(selectedCharacters);

  // 4. Display password on the page
  return "Generated password will go here";
}

function random() {
  return Math.floor(Math.random())
}
// for loop and math random function / paramente r and argument


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
