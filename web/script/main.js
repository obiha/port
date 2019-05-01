const signUpButton        = document.getElementById('signUp');
const signInButton        = document.getElementById('signIn');
const container           = document.getElementById('container');
const pro    = '#7492cc';
const casual = '#23272A';

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    document.body.style.background = pro;    
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    document.body.style.background = casual;
});