//La fonction $() remplace la fonction "document.getElementById() du DOM"
// ^= veut dire "commence par"

const links = document.querySelectorAll("a");
 
for (const destination of links) {
	destination.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}