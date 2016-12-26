'use strict';
var bookUsers = [];
var userArray = []
// function Users(userName, userPassword) {
//   this.userName = userName;
//   this.userpassword = userPassword;
//   this.signin = true;
//   bookUsers.push(this);
// }
var homeName = document.getElementById('homename');

function renderPage() {
  if (localStorage.bookUsers) {
    userArray.push(JSON.parse(localStorage.bookUsers));
    homeName.innerHTML = '<h1> khalid </h1>';
  }
}
renderPage();
