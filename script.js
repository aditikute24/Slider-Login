const signUpButton = document.getElementById('signUp');
const SignInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

SignInButton.addEventListener('click', ()  => {
    container.classList.remove("right-panel-active");

});