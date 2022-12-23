var generateBtn = document.querySelector("#generate");
 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


let masterArray = [];
letrandomPassword = "";

generateBtn.addEventListener("click" , writePassword);
function generatePassword() {
    let password = prompt("Please enter the number of characters you want for the new password. It mus be between 8 and 128 characters.");
    if (!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
        return alert("Invalid Response. Please try again.");
    }
}

let useSpecialCharacters = confirm("Do you want your new password to include special characters?");
if (useSpecialCharacters === true) {
    masterArray += specialCharacters;
}

let useNumbers = confirm("Do you want your new password to include numbers?");
if (useNumbers === true) {
    masterArray += numbers;
}

let useLowerCase = confirm ("Do you want your new password to include lowercase letters?");
if (useLowerCase === true) {
    masterArray += lowerCase;
}

let useUpperCase = confirm("Do you want your new password to include uppercase letters?");
if (useUpperCase === true) {
    masterArray += upperCase;
}