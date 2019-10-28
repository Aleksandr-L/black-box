function buttonRegistr() {
    let buttonRegistration = document.createElement("button"); //поле кнопки
    document.body.appendChild(buttonRegistration);
    buttonRegistration.name = "submit";
    buttonRegistration.placeholder = "регистрация";
    buttonRegistration.className = "registration";
    buttonRegistration.textContent = "Register";
    document.querySelector(".form1").append(buttonRegistration);
    buttonRegistration.type = "submit";
    buttonRegistration.onclick = registr;
}
