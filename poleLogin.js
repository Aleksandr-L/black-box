
function poleLogin() {

    let pole1 = document.createElement("input");  //поле ввода №1
    document.body.appendChild(pole1);
    pole1.name = "login";
    pole1.placeholder = "имя пользователя ";
    pole1.className = "pass";
    document.querySelector(".form1").append(pole1);

}