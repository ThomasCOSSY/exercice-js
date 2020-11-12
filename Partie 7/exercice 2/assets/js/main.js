let buttonBold = document.getElementById("buttonBold");
let buttonBlue = document.getElementById("buttonBlue");
let buttonEnlarge = document.getElementById("buttonEnlarge");
let text = document.querySelector("div");

buttonBold.onclick = function () {
    text.classList.toggle("bold");
};

buttonBlue.onclick = function () {
    text.classList.toggle("blue");
};

buttonEnlarge.onclick = function () {
    text.classList.toggle("enlarge");
};