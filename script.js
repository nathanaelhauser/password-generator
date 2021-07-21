// Assignment code here

var LowercaseChar='abcdefghijklmnopqrstuvwxyz';
var UppercaseChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var NumberChar='0123456789';
var SpecialChar='!#$%&()*+,-./:;<=>?@[\]^_`{|}~';


var passwordChar=""; parseInt(passwordChar);
//get random functions
function getRandomLower(){
  
  return LowercaseChar[Math.floor(Math.random()*LowercaseChar.length)];
}

function getRandomUpper(){
  return UppercaseChar[Math.floor(Math.random()*UppercaseChar.length)];
}

function getRandomNumber(){
  return NumberChar[Math.floor(Math.random()*NumberChar.length)];
}

function getRandomSpecialChar(){
  return SpecialChar[Math.floor(Math.random()*SpecialChar.length)];
}



var generatePassword= function(){
  var password="";
  var passwordBin="";
  var passwordLength = window.prompt("How many character do you want for your password? Pick a number from 8-128");
  passwordLength = parseInt (passwordLength);
  
  if(!(passwordLength>=8&& passwordLength<=128)){
    window.alert("Please pick a number betwween 8 and 128");
    return "";
  }

  //If password need to contain lowercase
  var wantLowerCase= confirm("Do you want lowercase character in your password?");
  

  //If password need to contain uppercase
  var wantUpperCase = confirm("Do you want uppercase character in your password?");
  

  //If password need to contain numeric character
  var wantNumerChar= confirm ("Do you want numeric character in your password?");
  
  
  //If password need to contain a special character
  var wantSpecialChar= confirm ("Do you want special character in your password?  ");
  if(wantLowerCase || wantUpperCase || wantNumerChar || wantSpecialChar) {
  for(i=0;i<passwordLength && passwordChar<passwordLength;i++ ) {
      //add lowercase if confirmed yes
      if(wantLowerCase){
        passwordBin= getRandomLower()+ passwordBin;
        passwordChar++;
      }

      //add uppercase if confirmed yes
      if(wantUpperCase){
        passwordBin= getRandomUpper()+ passwordBin;
        passwordChar++;
      }

      //add numeric character if confirmed yes
      if(wantNumerChar){
        passwordBin= getRandomNumber()+ passwordBin;
        passwordChar++;
      }

      //add lowercase if confirmed yes
      if(wantSpecialChar){
        passwordBin= getRandomSpecialChar()+ passwordBin;
        passwordChar++;
      }
    }}
    else{
      window.alert("You need to pick at least one requirement for your password! Please try again!");
      generatePassword();
    }

    function getRandom (){
      return passwordBin[Math.floor(Math.random()*passwordBin.length)];
    }

  for (t=0; t<passwordLength; t++){
    password= password+ getRandom();
    
  }

    return password;



  }

 












//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
