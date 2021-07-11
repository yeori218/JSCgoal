const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME = "username";

function loginSubmit(e){
    e.preventDefault();
    loginForm.classList.add(HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME, username);
    showGreeting(username);
}
    function showGreeting(username){
        greeting.innerText = `Welcome ${username} 😊`;
        greeting.classList.remove(HIDDEN);
    }

    const savedUsername = localStorage.getItem(USERNAME);
        if(savedUsername === null){
            loginForm.classList.remove(HIDDEN);
            loginForm.addEventListener("submit", loginSubmit);
        } else {
            showGreeting(savedUsername);
        }

        



