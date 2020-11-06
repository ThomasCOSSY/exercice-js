let name = document.getElementById("name");

name.addEventListener("focus" , border , true);
name.addEventListener("blur" , border , false);

function border() {
    name.classList.toggle("red");
}