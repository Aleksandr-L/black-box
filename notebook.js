let form = document.createElement("form");//форма
document.body.appendChild(form);
form.className = "form1";
form.action = "registr.php";
form.method = "POST";


function divFuncBook() {
    let div1 = document.createElement("div");
    document.body.appendChild(div1);
    document.body.div = "Super notebook";
    div1.innerHTML = "Super notebook";
    div1.className = "header";
    document.querySelector(".form1").append(div1);
}

function divFunc(){
    let divForm = document.createElement("br");
    document.body.appendChild(divForm);
    document.body.divForm = "Super notebook";
    divForm.className = "form1";
    document.querySelector(".form1").append(divForm);

}
