// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {

    // assign varibales to selections made by user
     var charnumwp = document.getElementById("chars").value;
     var locasewp = document.getElementById("lowercase").checked;
     var upcasewp = document.getElementById("uppercase").checked;
     var numiwp = document.getElementById("numeric").checked;
     var spcwp = document.getElementById("specialcharacters").checked;
     // Validate selections
     var selection = isselection(charnumwp,locasewp,upcasewp,numiwp,spcwp);

     // Declare variable to avoid undefined type
     var locasechar = [];
     var upcasechar = [];
     var numr = [];
     var spchar1 = [];
     var spchar2 = [];
     var spchar3 = [];
     var spchar4 = [];
     var spchar = [];
     var allchar = [];

    // If selection is valid then generate password
     if (selection) { 
       
    // assign character set for password generation

    //lowercase characters
      for (i=97; i<123; i++) {
         locasechar= locasechar + String.fromCharCode(i);     
       };
      

    // uppercase characters
       for (i=65; i<91; i++) {
          upcasechar = upcasechar + String.fromCharCode(i);
      };
   
       // numbers
       for (i=48; i<58; i++) {
        numr = numr + String.fromCharCode(i);
       };
 
    
      //special characters.. excluding spaces
      for (i=33; i<47; i++) {
        spchar1 = spchar1 + String.fromCharCode(i);
      };
      for (i=58; i<65; i++) {
        spchar2 = spchar2 + String.fromCharCode(i);
      };
      for (i=91; i<97; i++) {
        spchar3 = spchar3 + String.fromCharCode(i);
      };
      for (i=123; i<127; i++) {
        spchar4 = spchar4 + String.fromCharCode(i);
      };
      spchar = spchar1 + spchar2 + spchar3 + spchar4;
      console.log(spchar);
    
      //assign character range
      
      if (locasewp) {var allchar = allchar + locasechar};
      if (upcasewp) {var allchar = allchar + upcasechar};
      if (numiwp) {var allchar = allchar + numr};
      if (spcwp) {var allchar = allchar + spchar};

      console.log(allchar);

      // call generate password with character set and password size
        var password = generatePassword(allchar,charnumwp);
        var passwordText = document.querySelector("#password");
        passwordText.value = password;
      };
  };

//Check of selections are valid and complete
function isselection(charnum,locase,upcase,numi,spc) {
 
  // check if number of characters are within range
  if (charnum<8 || charnum>128) { 
    alert ("Ensure you select between 8 and 128 characters");
    return false; 
  }
  //check if atleast one password criterion is selected 
  if (!(locase||upcase||numi||spc)) {
    alert ("Ensure you select atleast one password criteria");
    return false;
  }
  return true;
  };
 
function generatePassword(characters, passwordsize) {
  console.log(characters);
  var finalpassword = [];
  // generate password with characters and size of passwordsize
  for (i=0; i<passwordsize; i++) {  
  var index = Math.floor(Math.random() * characters.length);
 
  var finalpassword = finalpassword + characters[index];
  console.log(finalpassword);
  };
  return finalpassword;
};

// Set variables
//Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);




