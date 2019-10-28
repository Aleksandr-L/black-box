
    let di = document.createElement("div");
    document.body.appendChild(di);
    di.className = "flex-container";

    let inputElement = document.createElement("input");
    document.body.appendChild(di);
    document.querySelector(".flex-container").append(inputElement);
    inputElement.name = "login";
    inputElement.placeholder = "имя пользователя ";
    document.querySelector(".form1").append(di);

    let inputElement1 = document.createElement("input");
    document.body.appendChild(di);
    document.querySelector(".flex-container").append(inputElement1);
    inputElement1.name = "login";
    inputElement1.placeholder = "имя пользователя ";
    document.querySelector(".form1").append(di);

    let inputElement2 = document.createElement("input");
    document.body.appendChild(di);
    document.querySelector(".flex-container").append(inputElement2);
    inputElement2.name = "login";
    inputElement2.placeholder = "имя пользователя ";
    document.querySelector(".form1").append(di);

    let dir = document.createElement("div");
    document.body.appendChild(dir);
    dir.className = "flex-container";
    document.querySelector(".form1").append(dir);

    let inputElement3 = document.createElement("input");
    document.body.appendChild(dir);
    document.querySelector(".flex-container").append(inputElement3);
    inputElement3.name = "login";
    inputElement3.placeholder = "имя ";
    document.querySelector(".flex-container").append(dir);
