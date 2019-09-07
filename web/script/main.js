const pro    = '#7492cc'; //Color for Professional site background
const casual = '#23272A'; //Color for Casual site background
const signUpButton        = document.getElementById('signUp');
const signInButton        = document.getElementById('signIn');
const container           = document.getElementById('container');
var   menu                = document.querySelector('ul');
var   menuLink            = document.querySelector('img');
const resumeButton        = document.querySelector('button-one');

//SignIn.html/////////////////////////////////////////////////////////////////////////////////////////////////////////
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    document.body.style.background = pro;    
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    document.body.style.background = casual;
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// resumeButton.addEventListener('click', () =>{
//     console.log("This is working")
//     // window.open("web/pdf/Resume.pdf");
// })

// menuLink.addEventListener('click',(e) => {
//     menu.classList.toggle('active');
//     e.preventDefault();
// })
