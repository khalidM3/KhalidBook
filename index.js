'use strict';
var signUpForm = document.getElementById('signupform');
var bookUsers = [];
signUpForm.addEventListener('submit', HandleSignUpForm);



function HandleSignUpForm (event) {
  event.preventDefault();
  var userName = event.target.username.value;
  var userPassword = event.target.userpassword.value;
  console.log(userName);
  console.log(userPassword);
  if (userName.length === 0 || userPassword === 0) {
    alert('Sorry, the input cannot be blank');
  } else{
    new Users(userName, userPassword);
    Users.signin = true;
    console.log(userName.signin);
    localStorage.setItem(''+ userName +'', JSON.stringify(bookUsers));
    window.location.href='home.html';
  }
}

if (localStorage.bookUsers) {
  bookUsers = JSON.parse(localStorage.bookUsers);
}
function Users(userName, userPassword) {
  this.userName = userName;
  this.userpassword = userPassword;
  this.signin = false;
  bookUsers.push(this);
}
