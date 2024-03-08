import { init } from "./lib/DOM/display.js";

init();

const form = document.querySelector("form");
let secretMessage;



form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    for (const val of formData.values()){
        secretMessage = btoa(val);
    }

    window.location.hash = secretMessage;

    document.querySelector('#shareUrl').value = window.location.href + window.location.hash;
    
})

window.onload =  () => {
    let encodedMessage = window.location.hash.substring(1);
    let decodedMessage = atob(encodedMessage);
    document.querySelector('#secretMessage').innerHTML = decodedMessage;
};
