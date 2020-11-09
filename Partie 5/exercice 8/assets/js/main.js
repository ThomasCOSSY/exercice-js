const button = document.getElementById("button");

button.addEventListener("click" , dupli);

function dupli(e) {
        e.preventDefault();
        let name = document.getElementById("form").cloneNode(true);
        document.getElementById("formName").appendChild(name);
    }
