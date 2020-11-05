let password = document.getElementById('mdp1');
let confirmPassword = document.getElementById('mdp2');

let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    let mdp1 = form.elements.mdp1.value;
    let mdp2 = form.elements.mdp2.value;
    let message = "Mots de passe OK";

    if (mdp1 === mdp2) {
        message;
        password.classList.add('correct');
        confirmPassword.classList.add('correct');
        
    } else {
        message = "Erreur : les mots de passe saisis sont différents";
        password.classList.add('error');
        confirmPassword.classList.add('error');
    }
    document.getElementById("infoMdp").textContent = message;
    e.preventDefault();
});