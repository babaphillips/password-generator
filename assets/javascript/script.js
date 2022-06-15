// Assignment code here
var generateBtn = document.querySelector("#generate");

var uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolsCharacters = ["#","?","!","@","$","%","^","&","*","-"];

function generatePassword() {

  var selectedCharacters = [];
  var finalResult = [];

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
  console.log(length)

  //  b. Lowercase, uppercase, numbers, special characters
  var uppercase = confirm("Would you like to use uppercase letters? Ok for yes, cancel for no");
  var lowercase = confirm("Would you like to use lowercase letters?Ok for yes, cancel for no");
  var numbers = confirm("Would you like to use numbers?Ok for yes, cancel for no");
  var symbols = confirm("Would you like to use special characters?Ok for yes, cancel for no");

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

  for (var i = 0; i < length; i++) {
    finalResult.push(random(selectedCharacters)) 
    
  }

  // 4. Display password on the page
  return finalResult.join('');
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
