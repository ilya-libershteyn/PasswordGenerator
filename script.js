// Password character sets
var lowerC = "abcdefghijklmnopqrstuvwxyz";
var upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numerical = "0123456789";
var specialC = "!\"#$%'()*+,-./:;<=>?@[\\]^_`{|}~";

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
  var charset = chooseCharSets();
  var len = choosePWLength();
  var password = "";

  for(var i = 0; i < len; i++)
  {
      var index = Math.floor((Math.random() * charset.length));

      password = password + charset.charAt(index);
  }
  
  return password;
}

// User selects password criteria
function chooseCharSets()
{
  // Store user selections as one character set
  var crypto = "";
  
  // A do-while loop will ensure this code is run at least once
  do
  {  
    var lower = confirm("Should your password contain lowercase characters(a-z)?");
    if(lower)
    {
      crypto = crypto + lowerC;
    }

    var upper = confirm("Should your password contain uppercase characters(A-Z)?");
    if(upper)
    {
      crypto = crypto + upperC;
    }

    var numbers = confirm("Should your password contain numerical characters(0-9)?");
    if(numbers)
    {
      crypto = crypto + numerical;
    }

    var special = confirm("Should your password contain special characters?");
    if(special)
    {
      crypto = crypto + specialC;
    }

    if(crypto.length == 0)
    {
      alert("You must pick at least one character set!")
    }
  } while(crypto.length == 0);
  
  return crypto;
}

// User chooses the password length
function choosePWLength()
{
  var length = 0;
  
  // A do-while loop will ensure this code is run at least once
  do
  {
    length = parseInt(prompt("What is the desired length of your password? Must be between 8 and 128"));

    if(length < 8 || length > 128 || !length)
    {
      alert("You have selected an insecure password length!");
    }
  } while(length < 8 || length > 128 || !length);
  
  return length;
}