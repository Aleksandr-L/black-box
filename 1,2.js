function plus(event) {
    event.preventDefault()
    // var num1 = document.getElementById('n1').value;
    // var num2 = document.getElementById('n2').value;
    //     num2 = parseInt(num2);
    //     num1 = parseInt(num1);
    // var result = num1 + num2;
    //     document.getElementById('out').innerHTML = result;
//шаг 1. Отправка  на сервер к файлу calc.php

    fetch('https:///OSPanel/domains/test/calc.php', {
        method: 'POST',
        body: new FormData(document.forms[0])
        })
        .then(response => response.text())
        .then(result => {
         //Шаг 3. Получение ответа от сервира, показ пользователю
         document.getElementById('out').innerHTML = result;
        })

}
function btnminus(){
    var num1,num2,result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    num1 = parseInt(num1);
    result = num1 - num2;
    document.getElementById('out').innerHTML = result;
}
function btnmult(){
    var num1,num2,result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    num1 = parseInt(num1);
    result = num1 * num2;
    document.getElementById('out').innerHTML = result;
}
function btndel() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    num1 = parseInt(num1);
    result = num1 / num2;
    document.getElementById('out').innerHTML = result;
}
function f() {
    var nd = document.getElementsByTagName("div").value

}


