var generateBtn = document.querySelector("#generate");
function writePassword(){
var password = generatePassword();
var passwordText = document.querySelector("#password");
passwordText.value = password;
}

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let masterArray = [];
letrandomPassword = "";
generateBtn.addEventListener("click",writePassword);
function generatePassword(){
let passwordLength = prompt("Please enter the number of characters you want for the new password. It mus be between 8 and 128 characters.");
if (!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
   return alert("Invalid Response. Please try again.");
}

let useLowerCase = confirm ("Do you want your new password to include lowercase letters?");
if (useLowerCase === true) {
    masterArray += lowerCase;
}

let useUpperCase = confirm("Do you want your new password to include uppercase letters?");
if (useUpperCase === true) {
    masterArray += upperCase;
}

let useNumbers = confirm("Do you want your new password to include numbers?");
if (useNumbers === true) {
    masterArray += numbers;
}

let useSpecialCharacters = confirm("Do you want your new password to include special characters?");
if (useSpecialCharacters === true) {
    masterArray += specialCharacters;
}

let randomPassword = " ";
for (let i = 0; i < passwordLength; i++) {
    randomPassword += masterArray[Math.floor(Math.random()*(masterArray.length))];
    console.log(Math.floor(Math.random()*(masterArray.length)));
    console.log(randomPassword);
}
return randomPassword;

}
