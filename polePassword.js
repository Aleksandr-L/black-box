function polePassword() {
    let pole2 = document.createElement("input");  //поле ввода №2
    document.body.appendChild(pole2);
    pole2.name = "password";
    pole2.placeholder = "пароль";
    pole2.className = "pass";
    document.querySelector(".form1").append(pole2);

}




