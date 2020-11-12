// Traduire cette fonction fléchée en fonction nommée.

// (name) => {
//   `Bonjour, ${name} ! Comment vas-tu ?`;
// }
let resultDiv = document.getElementById("resultDiv");
let submitButton = document.getElementById("submitButton");

submitButton.onclick = function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    yourName =  "Bonjour, " + name + " ! Comment vas-tu ?";
    resultDiv.innerHTML = "<p>" + yourName + "</p>";
}
