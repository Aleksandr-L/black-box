    /*var link = document.createElement("link");
    document.head.appendChild(link);
    document.querySelector("links");
    document.links.rel = "stylesheet";
    document.links.href="style.css";
    document.links.type="text/css";*/

    var style = document.createElement('link');
    document.head.appendChild(style);
    style.rel   = 'stylesheet';
    style.type  = 'text/css';
    style.href  = "style.css";

    var center = document.createElement("center");
    document.body.appendChild(center);
    document.querySelector("center");

    var form = document.createElement("form");
    document.body.appendChild(form);
    document.querySelector("form");

    var pole1 = document.createElement("input");
    document.body.appendChild(pole1);
    pole1.name = "login";
    pole1.placeholder ="имя пользователя ";
    pole1.class = "pass";

    var space = document.createElement("br");
    document.body.appendChild(space);
    var space = document.createElement("br");
    document.body.appendChild(space);

    var pole2 = document.createElement("input");
    document.body.appendChild(pole2);
    pole2.name = "password";
    pole2.placeholder ="пароль";
    pole2.class = "pass";

    var space = document.createElement("br");
    document.body.appendChild(space);
    var space = document.createElement("br");
    document.body.appendChild(space);

    var pole3 = document.createElement("input");
    document.body.appendChild(pole3);
    pole3.name = "confirm";
    pole3.placeholder ="подтвердите пароль";
    pole3.class = "pass";

    var space = document.createElement("br");
    document.body.appendChild(space);
    var space = document.createElement("br");
    document.body.appendChild(space);

    var pole4 = document.createElement("input");
    document.body.appendChild(pole4);
    pole4.name = "mail";
    pole4.placeholder ="email";
    pole4.class = "pass";

    var space = document.createElement("br");
    document.body.appendChild(space);
    var space = document.createElement("br");
    document.body.appendChild(space);

    var buttonRegistration = document.createElement("button");
    document.body.appendChild(buttonRegistration);
    buttonRegistration.name = "registration";
    buttonRegistration.placeholder ="регистрация";
    buttonRegistration.class = "registration";


    // let buttonRegistration = document.querySelector( ".registration");
    // let inputIn = document.querySelector( ".pass");
    // // //inputIn.value = "hi";
    // inputIn.innerHTML;
    // buttonRegistration.onclick = function() {
    // console.log(inputIn.value);
    // }// кнопка регистрации
    /*for (let node of document.body.childNodes) {
        alert(node); // покажет все узлы из коллекции
    }*/