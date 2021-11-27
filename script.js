// Assignment code here

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8' ,'9'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C!', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var useSymbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];


function collectData() {
  // Ask for password length
  var length = prompt("How long do you want your password to be, must be between 8-128 characters?")
  
  // check that length follows guidelines
  if (length > 128) { alert("Too many chars");
  return;
 }

  if (length < 8) {
    alert("not enough chars");
    return;
  }

  // What type of characters they want to use

  var useNumber = confirm("Would you like to use numbers?");

  var uselowerCase = confirm("Would you like to use lower case chars?");

  var useupperCase = confirm("Would you like to use upper case chars?");

  var useSymbols = confirm("Would you like to use symbols?");


  //Check to make sure they chose at least 1 type of character

  if (useNumber === false && uselowerCase === false && useupperCase === false && useSymbols === false) {
    alert("must select at lease one character type");
    return;
  }

  // Store all of the users data in a object

  var userData = {
    length: length,
    useNumber: useNumber,
    uselowerCase: uselowerCase,
    useupperCase: useupperCase,
    useSymbols: useSymbols
  }  

  //Return object of user's data
  return userData;
}


function generatePassword() {
  var chosenData = collectData();
  // console.log(chosenData)

  var result = [];
  var allUsersOptions = [];
  var atLeastOneOfThese = [];

  // Look up methos for .concat and .push

  if (chosenData.useNumber) {
  allUsersOptions = allUsersOptions.concat(numbers);
  atLeastOneOfThese.push(randomize(numbers));
  }

  else if (chosenData.upperCase) {
  allUsersOptions = allUsersOptions.concat(upperCase);
  atLeastOneOfThese.push(randomize(upperCase));
  }

  else if (chosenData.lowerCase) {
  allUsersOptions = allUsersOptions.concat(lowerCase);
  atLeastOneOfThese.push(randomize(lowerCase));
  }

  else (chosenData.useSymbols); {
  allUsersOptions = allUsersOptions.concat(useSymbols);
  atLeastOneOfThese.push(randomize(useSymbols));
  }

  result; 
}
// for loops to go through infor


// Creata Math.floor(Math.random) function
function randomize(array) {
  //write 
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);