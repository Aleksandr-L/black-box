let a      = document.querySelector('.search');
let button = document.querySelector('.note');
let div    = document.querySelector(".block-left");


button.onclick = function AddNewNote () {
let button_two = document.createElement("div");
div.appendChild(button_two);
document.querySelector(".note");
button_two.innerHTML = a.value;
button_two.className = "class_1 ";
let space = document.createElement("br");
div.appendChild(space);
};


function note(event) {
        event.preventDefault();
    let request =  new FormData(document.forms[0]);
    fetch("planner.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.text())
        .then(result => {"planner_Get.php"
        });
    }

