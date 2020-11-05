var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    var mdp1 = form.elements.mdp1.value;
    var mdp2 = form.elements.mdp2.value;
    var message = "Mots de passe OK";

    if (mdp1 === mdp2) {
        message;
        document.getElementById("mdp2").style.borderColor="green";
        document.getElementById("mdp1").style.borderColor="green";
        
    } else {
        message = "Erreur : les mots de passe saisis sont différents";
        document.getElementById("mdp2").style.borderColor="red";
        document.getElementById("mdp1").style.borderColor="red";
    }
    document.getElementById("infoMdp").textContent = message;
    e.preventDefault();
});