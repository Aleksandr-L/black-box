
function poleConfirm() {

    let pole3 = document.createElement("input");  //поле ввода №3
    document.body.appendChild(pole3);
    pole3.name = "confirm";
    pole3.placeholder = "подтвердите пароль";
    pole3.className = "pass";
    document.querySelector(".form1").append(pole3);
}

