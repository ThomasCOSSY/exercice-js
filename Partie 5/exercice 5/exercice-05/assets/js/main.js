function changeStyle(element) {

    let text = document.getElementById("text");
    let button = document.querySelectorAll("button");
    
console.log(element.className);

if (element.className == "buttonPink") {
    text.classList.add("pink");
    text.classList.remove("blue", "purple", "bold", "italic");
    
}; 

if (element.className == "buttonBlue") {
    text.classList.add("blue");
    text.classList.remove("pink", "purple", "bold", "italic");
};     

if (element.className == "buttonPurple") {
    text.classList.add("purple");
    text.classList.remove("blue", "pink", "bold", "italic");
};    

if (element.className == "buttonBold") {
    text.classList.add("bold");
    text.classList.remove("blue", "purple", "pink", "italic");
};

if (element.className == "buttonItalic") {
    text.classList.add("italic");
    text.classList.remove("blue", "purple", "bold", "pink");
};

};
