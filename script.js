// Password character sets
var lowerC = "abcdefghijklmnopqrstuvwxyz";
var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerical = "0123456789";
var special = "!\"#$%'()*+,-./:;<=>?@[\\]^_`{|}~";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()
{
  
}

// User selects password criteria
function chooseCharSets()
{
  // Prompt user for charsets  
  var lower = confirm("Should your password contain lowercase characters(a-z)?");
  var upper = confirm("Should your password contain uppercase characters(A-Z)?");
  var numbers = confirm("Should your password contain numerical characters(0-9)?");
  var special = confirm("Should your password contain special characters?");

  // Store user selections as an octal value
  var crypto = 0;
  
  while(crypto == 0)
  {  
   
  }
}