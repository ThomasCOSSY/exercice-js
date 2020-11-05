let border = document.querySelectorAll("label");

border.addEventListener("mouseenter" , addBorder);
border.addEventListener("mouseleave" , removeBorder);

function addBorder(){
    border.classList.add("black");
};

function removeBorder(){
    border.classList.remove("black")
}