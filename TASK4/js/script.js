const loginModal = document.getElementById('login-mode');
const signupModal = document.getElementById('signup-mode');

const signup = document.querySelector('.signup-box');
const login = document.querySelector('.login-box');

const body = document.querySelector('body');

function runSignUp() {
    console.log("signup");
    signup.classList.add('active');
    login.classList.remove('active'); 
    
}


function runLogIn() {
    console.log("login");
    login.classList.add('active');
    signup.classList.remove('active');
}

function loadLogin() {
    console.log("sdjfadkf");
    login.classList.add('active');
}
window.addEventListener('load', loadLogin);
loginModal.addEventListener('click', runLogIn);
signupModal.addEventListener('click', runSignUp);
