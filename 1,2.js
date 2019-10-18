function sum(event) {
     event.preventDefault()
    // var num1 = document.getElementById('n1').value;
    // var num2 = document.getElementById('n2').value;
    //     num2 = parseInt(num2);
    //     num1 = parseInt(num1);
    // var result = num1 + num2;
    //     document.getElementById('result').innerHTML = result;}

//шаг 1. Отправка  на сервер к файлу calc.php
    var request =  new FormData(document.forms[0]);
    request.append("name","plus");//  положили из input.
   fetch("calc.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.text())
        .then(result => {
 //Шаг 3. Получение ответа от сервира, показ пользователю
         document.getElementById('result').innerHTML = result;
        });
 }

function minus(event) {
    event.preventDefault();
    var request =  new FormData(document.forms[0]);
    request.append("name","minus");//  положили из input.
    fetch("calc.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.text())
        .then(result => {
            document.getElementById('result').innerHTML = result;
        });
}

function ymogit(event) {
    event.preventDefault()
    var request =  new FormData(document.forms[0]);
    request.append("name","ymogit");//  положили из input.
    fetch("calc.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.text())
        .then(result => {
            document.getElementById('result').innerHTML = result;
        });
}
function delet(event) {
    event.preventDefault()
    var request =  new FormData(document.forms[0]);
    request.append("name","delet");//  положили из input.
    fetch("calc.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.text())
        .then(result => {
            document.getElementById('result').innerHTML = result;
        });
}
