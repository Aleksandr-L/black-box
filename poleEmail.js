function poleEmail() {
    let pole4 = document.createElement("input");   //поле ввода №4
    document.body.appendChild(pole4);
    pole4.name = "email";
    pole4.placeholder = "email";
    pole4.className = "pass";
    document.querySelector(".form1").append(pole4);
}

