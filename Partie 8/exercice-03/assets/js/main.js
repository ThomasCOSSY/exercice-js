let paragraphs = document.querySelectorAll("p");

let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")
let p5 = document.getElementById("p5")
let p6 = document.getElementById("p6")
let p7 = document.getElementById("p7")
let p8 = document.getElementById("p8")
let p9 = document.getElementById("p9")
let p10 = document.getElementById("p10")
let p11 = document.getElementById("p11")
let p12 = document.getElementById("p12")

window.addEventListener("scroll", function () {
    if(window.scrollY > 50){
        p1.classList.add("visible");
    }
    if(window.scrollY > 100){
        p2.classList.add("visible");
    }
    if(window.scrollY > 150){
        p3.classList.add("visible");
    }
    if(window.scrollY > 200){
        p4.classList.add("visible");
    }
    if(window.scrollY > 250){
        p5.classList.add("visible");
    }
    if(window.scrollY > 300){
        p6.classList.add("visible");
    }
    if(window.scrollY > 400){
        p7.classList.add("visible");
    }
    if(window.scrollY > 700){
        p8.classList.add("visible");
    }
    if(window.scrollY > 1000){
        p9.classList.add("visible");
    }
    if(window.scrollY > 1200){
        p10.classList.add("visible");
    }
    if(window.scrollY > 1400){
        p11.classList.add("visible");
    }
    if(window.scrollY > 1600){
        p12.classList.add("visible");
    }
});