let name = document.getElementById('name');
let email = document.getElementById('email');
let age = document.getElementById('age');


let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(1);
    let nameTest = form.elements.name.value;
    let emailTest = form.elements.email.value;
    let ageTest = form.elements.age.value;
    let message = "Valide";

    //nameFormat
    let nameFormat = /[A-Za-z]/

    if (nameTest.match(nameFormat)) {
        console.log(2);
        message;
        name.classList.add('correct');
    } else {
        console.log(3);
        message = "Nom incorrecte";
        name.classList.add('error');
    }
    document.getElementById("info1").innerHTML = message;
    console.log(document.getElementById("info1"));


    //mailFormat
    let mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailTest.match(mailFormat)) {
        message;
        email.classList.add('correct');
    } else {
        message = "adresse mail non reconnu";
        email.classList.add('error');
    }
    document.getElementById("info2").innerHTML = message;


    //ageFormat
    let ageFormat = /[0-9]+/

    if (ageTest.match(ageFormat)) {
        message;
        age.classList.add('correct');
    } else {
        message = "veuillez renseigner des chiffres uniquement";
        age.classList.add('error');
    }
    document.getElementById("info3").innerHTML = message;


});