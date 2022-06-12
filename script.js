// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey! You clicked the button!");

  // 1. Prompt the user for the password criteria

  //  a. Password length 8 < 128
  var length = Number(prompt("How many characters for your password?"));
  while (isNaN(length) || length < 8 || length > 128)
    length = Number(
      prompt(
        "Length must be at least 8 characters and more than 128 characters."
      )
    );

  //  b. Lowercase, uppercase, numbers, special characters
  var uppercase = confirm("Would you like to use uppercase letters?");
  var Lowercase = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to use numbers?");
  var symbols = confirm("Would you like to use special characters?");

  // 2. Validate the input
while (!uppercase && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppercase = confirm("Would you like to use uppercase letters?");
  Lowercase = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  symbols = confirm("Would you like to use special characters?");
}
  // 3. Generate password on criteria

  window.addEventListener('load', function() {
    generatePassword();
  });

  function generatePassword() {
    var password = "";

    var allowed = {};
    if (uppercase) password += Math.random(allowed.uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM");
    if (Lowercase) password += Math.random(allowed.Lowercase = "qwertyuiopasdfghjklzxcvbnm");
    if (numbers) password += Math.random(allowed.numbers = "0123456789");
    if (symbols) password += Math.random(allowed.symbols = "!@#$%^&*(){}[]=<>/,.");

    for (var i = password.length; i < length; i++) password += Math.random(random(allowed).value);

    document.getElementById("password").value = 
  }


  // 4. Display password on the pag
  return "Generated password will go here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
