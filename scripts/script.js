const loginBox = document.getElementById("login-box");
const signBox =  document.getElementById("sign-up-box");
const signupLink = document.getElementById("sign-up-link");
const loginLink = document.getElementById("login-link");

function showSignup(){
    loginBox.style.display = 'none';
    signBox.style.display = 'block';
}

function showLogin(){
    loginBox.style.display = 'block';
    signBox.style.display = 'none';
}