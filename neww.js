// Show password 
function addd() {
  let x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// Alert Message :
let myInput = document.getElementById("pass");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

// if user click..
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}
myInput.onblur = function() { //When Touch outside it'll Blur.
  document.getElementById("message").style.display = "none";
}

// Type Inside
myInput.onkeyup = function() {
  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  //  Validate uppercase letters
  let upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }
  // Validate Numbers
  let numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate stregth
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

}

/*function clickk() {
  if (document.getElementById("success").value) {
    console.log("Goddamn Ryt");
  } else {
    document.getElementById("error").style =
      "display:block;color:red;margin-left: 39%;";
  }
  if (document.getElementById("succes").value) {
    console.log("Ryt");
  } else {
    document.getElementById("erorr").style =
      "display:block;color:red;margin-left: 39%;";
  }
}*/