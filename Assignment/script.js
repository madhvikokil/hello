// Validation of Username and password

function validation(){
  var uname = document.login.uname.value;
  var pwd = document.login.pwd.value;

  if(uname=="")
  {
      alert("Username should not be blank");
      return;
  }
  else if(pwd =="")
  { 
    alert("Password should not be blank");
    return;
  }
  var usenameRegex = "(*[a-z])(*[A-Z]).{4,}";
  var passwordRegex = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}";
  /* var passwordResult = pwd .match(passwordRegex); */
  if((pwd.match(passwordRegex)) && (uname.match(usenameRegex)))
  {

      document.write(window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match'));
     
  }
  else{ 
      alert('Wrong...!')
  }
  /* var passwordRegex = "(?=.*[a-z])(?=.*[A-Z]).{2,}";
  if)
  {

    document.write(window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match'));
     
  }
  else{ 
      alert('Wrong...!')
  } */

}

// For sign-up page

function register() {
  var fname = document.login.fname.value;
  var lname = document.login.lname.value;
  var address = document.login.address.value;

  if(fname=="" ||lname =="" ||address==""){
    alert("Fields should not be blank");
    return;
}

var firstnameRegex = '[a-zA-Z]';
var firstnameResult = fname.match(firstnameRegex);

if(!firstnameResult){
  alert("invalid");
}

var lastnameRegex = '[a-zA-Z]';
var lastnameResult = lname.match(lastnameRegex);

if(!lastnameRegex){
  alert("invalid");
}

var addressRegex = '[a-zA-Z]';
var addressResult = address.match(addressRegex);


document.write(window.open('https://www.the-art-of-web.com/javascript/validate-password/'));



}


