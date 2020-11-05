let img = document.getElementById('img1');

img.addEventListener('mouseenter' , UpdateImage);
img.addEventListener('mouseleave' , ImageOrigin);
img.addEventListener( 'click' , changeImage);

function changeImage() {
    console.log(img.src);
    if (img.src == "file:///C:/Users/FatalibotMK7/Documents/Exercices%20de%20la%20formation%20laManu/exo-JS/Partie%205/exercice%204/assets/img/pacman.png") {
        
        img.setAttribute("src", "assets/img/pacman2.png");
        console.log(1);
    }
    else {
        img.setAttribute("src", "assets/img/pacman.png");
        console.log(2);
    }
};

function UpdateImage(){
    img.classList.add('bigimg');
};

function ImageOrigin(){
    img.classList.remove('bigimg')
}