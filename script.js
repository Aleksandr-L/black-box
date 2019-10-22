
    let style = document.createElement('link');//присоединение файла
    document.head.appendChild(style);
    document.querySelector("link");
    style.rel   = 'stylesheet';
    style.type  = 'text/css';
    style.href  = "style.css";

    let form = document.createElement("form");//форма
    document.body.appendChild(form);
    form.className = "form1";
    form.action = "";
    form.method = "POST";

    let div1 = document.createElement("div");//для чего див
    document.body.appendChild(div1);
    document.body.div = "Super notebook";
    div1.innerHTML = "Super notebook";
    div1.className = "header";
    document.querySelector(".form1").append(div1);

    let spaceL = document.createElement("br");     //пробелы заменить в Css
    document.body.appendChild(spaceL);
    document.querySelector(".form1").append(spaceL);

    let pole1 = document.createElement("input");  //поле ввода №1
    document.body.appendChild(pole1);
    pole1.name = "login";
    pole1.placeholder ="имя пользователя ";
    pole1.className = "pass";
    document.querySelector(".form1").append(pole1);

    let spacel = document.createElement("br");
    document.body.appendChild(spacel);
    document.querySelector(".form1").append(spacel);

    let pole2 = document.createElement("input");  //поле ввода №2
    document.body.appendChild(pole2);
    pole2.name = "password";
    pole2.placeholder ="пароль";
    pole2.className = "pass";
    document.querySelector(".form1").append(pole2);

    let space1 = document.createElement("br");
    document.body.appendChild(space1);
    document.querySelector(".form1").append(space1);

    let pole3 = document.createElement("input");  //поле ввода №3
    document.body.appendChild(pole3);
    pole3.name = "confirm";
    pole3.placeholder ="подтвердите пароль";
    pole3.className = "pass";
    document.querySelector(".form1").append(pole3);

    let space2 = document.createElement("br");
    document.body.appendChild(space2);
    document.querySelector(".form1").append(space2);

    let pole4 = document.createElement("input");   //поле ввода №4
    document.body.appendChild(pole4);
    pole4.name = "mail";
    pole4.placeholder ="email";
    pole4.className = "pass";
    document.querySelector(".form1").append(pole4);

    let space3 = document.createElement("br");
    document.body.appendChild(space3);
    document.querySelector(".form1").append(space3);

    let buttonRegistration = document.createElement("button"); //поле кнопки
    document.body.appendChild(buttonRegistration);
    buttonRegistration.name = "submit";
    buttonRegistration.placeholder ="регистрация";
    buttonRegistration.className= "registration";
    buttonRegistration.textContent = "Register";
    document.querySelector(".form1").append(buttonRegistration);
    buttonRegistration.type = "submit";

