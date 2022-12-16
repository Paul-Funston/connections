'use strict';
/*
  Intro to Third Party APIs
  Paul Funston

  Connections: LinkedIn clone
  Login Page
*/

const email = 'name@email.com';
const password = 'password';

const inputEmail = document.querySelector('.email');
const inputPass = document.querySelector('.password');

const loginBtn = document.querySelector('.login-btn');

loginBtn.addEventListener('click', () => {
  validateLogin();
});

setCredentials();

function setCredentials() {
  // if local storage empty add username/pass
  if (!localStorage.getItem('userName')) {
    localStorage.setItem('userName', email);
    localStorage.setItem('password', password);
  }
};

function getCredentials() {
  let userName = localStorage.getItem('userName');
  let userPassword = localStorage.getItem('password');
  // return user/pass from local storage
  return [userName, userPassword];
};

function validateLogin() {


  if (isLoginValid(inputEmail.value.trim(), inputPass.value.trim())) {
    window.location.href = './profile.html';
  } else {

    inputEmail.classList.add('flash');
    inputPass.classList.add('flash');

    setTimeout(() => {
      inputEmail.classList.remove('flash');
      inputPass.classList.remove('flash');
    }, 1000)
      // give user error message
  }

};

function isLoginValid(email, password) {
  const credentials = getCredentials();
  return (email === credentials[0] && password === credentials[1])
}




