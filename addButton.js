document.addEventListener("DOMContentLoaded",function () {

document.querySelector('#out').onkeyup = function () {
   //debugger
    let val = this.value.trim();
    let outItems = document.querySelectorAll(".entry");
    if(val !=""){
        outItems.forEach(function(divElement){
            if (divElement.innerText.indexOf(val) == -1){
                divElement.classList.add('displayHidden');
            }
            else {
                divElement.classList.remove("displayHidden");
            }
    });
    }
}
});
let dateOfRecording = document.querySelector('.data');
let AddNewNote = document.querySelector('.note');
let button_save = document.querySelector('.save');
let div = document.querySelector(".block-left");
let div2 = document.querySelector(".block-right");
let blockRight = document.querySelector(".search-field");
let dataDiv = document.querySelector(".entry");
let entry = [];
let editedEntry;
let inputUsers = document.querySelector(".input");
requestAllEntries(); //показывает записи при первоначальной загрузке
let buttonСhange = document.querySelector('.change');
let buttonСhange2 = document.querySelector('.change');
let paragraph2 = document.querySelector('.entry');
let divChange = document.querySelector(".change");
let divDelete = document.querySelector(".delete");
let divElement = document.querySelector(".title");
let inputUser = document.querySelector(".displayHidden");
const tasks = new Map();
let currentTask;
let result;

function addChanges() {//функция запрашивает изменения на файл changes.php
    //event.preventDefault();
    //выполняет запрос в бд отдали в функцию requestAllEntries массив
    let request =  new FormData(document.forms[0]);
    fetch("changes.php",{
        method: 'POST',
        body: request
    })
        .then(response => response.text())
        .then(response => {
               // debugger
                result = response; //записываем пришедший результата
                requestAllEntries();
            }
            )};
AddNewNote.onclick = ()=> {// отображает правый блок
    // showEditContainer();
    blockRight.innerHTML= '';

    let inputUsers = document.createElement("input");
    blockRight.appendChild(inputUsers);
    inputUsers.className ="block_right";
    inputUsers.name = "users";
    inputUsers.type = "text";
    inputUsers.id = "inp1";

    let space = document.createElement("br");
    inputUsers.after(space);
    let space2 = document.createElement("br");
    inputUsers.after(space2);

    let inputUsers2 = document.createElement("input");
    blockRight.appendChild(inputUsers2);
    inputUsers2.className ="block_right";
    inputUsers2.name = "days";
    inputUsers2.type = "date";
    inputUsers2.id = "inp2";

    let space3 = document.createElement("br");
    inputUsers2.after(space3);
    let space23 = document.createElement("br");
    inputUsers2.after(space23);

    let inputUsers3 = document.createElement("input");
    blockRight.appendChild(inputUsers3);
    inputUsers3.className ="block_right2";
    inputUsers3.name = "textarea";
    inputUsers3.type = "text";
    inputUsers3.id = "inp3";

    inputUser = document.createElement("input");
    blockRight.appendChild(inputUser);
    inputUser.className ="search-field";
    inputUser.name = "hidden";
    inputUser.type = "text";
    inputUser.id = "inp11";

    //добавить поле hidden
    let buttonСhange = document.createElement("input");
    blockRight.appendChild(buttonСhange);
    buttonСhange.className ="save";
    buttonСhange.name = "registr";
    buttonСhange.type = "button";
    buttonСhange.value = "save";
    buttonСhange.onclick = function (event) {
        //event.preventDefault();
    addEntry();// отображает данные на страницу влевой части
    setTimeout(requestAllEntries, 500);// после добавления записи обновляем список
};
        document.getElementById("data").addEventListener("click", onClickEntry);// при нажатии на запись переходит в правый блок
};

function requestAllEntries() {//принимает  данные из фукции addEntry и обрабатывает

    fetch("planner_Get.php", {
        method: 'POST'
    })
        .then(response => response.json())
        .then(result => {
            if (Array.isArray(result)) {// проверка что массив это массив
                dataDiv.innerText = '';//перезатираем правую часть чтобы появлялась один раз
               // tasks.clear();
                result.forEach(task => {//циклом перебираю результат ложу в переменную task
                   tasks.set(task.id, task);
                });

                tasks.forEach((task) => {// перебираем массив
                    divElement = document.createElement("div");
                    divElement.id = task.id; //диву присвоили id элемента из бд
                    divElement.className = "title";
                    divElement.innerHTML =task.user; //в див вставляемимя имя пользователя из массива
                    dataDiv.appendChild(divElement);
                    divElement.onclick = ()=> {
                    blockRight.id = task.id;//по id и (event.target.id) сравниваем с id в бд на что нажали мышкой
                    blockRight.innerHTML =task.user;
                    };
                    dataDiv.append();

                    let dateOfRecording = document.createElement('div');
                    dataDiv.append(dateOfRecording);
                    dateOfRecording.className = "data";
                    dateOfRecording.innerText =task.days;
                    dateOfRecording.id = task.id;

                    let divChange = document.createElement('div');//будет div change
                    dataDiv.append(divChange);
                    divChange.id = task.id;
                    paragraph2 = document.createElement('a');
                    divChange.className = "change";
                    paragraph2.name ="&#128396;;";
                    paragraph2.innerHTML = "&#128396;";
                    paragraph2.id = task.id; //в id параграфа вставляем id массива
                    divChange.append(paragraph2);
                    paragraph2.onclick = onClickEntry;

                    let divDelete = document.createElement('div');//будет div delete
                    dataDiv.append(divDelete);
                    divDelete.id = task.id;
                    let paragraph = document.createElement('a');
                    paragraph.href = "delete.php?id=" + task.id;//добавляем индентификатор к строке
                    divDelete.className = "delete";
                    paragraph.name = "&#10005;";
                    paragraph.innerHTML = "&#10005;";
                    divDelete.append(paragraph);

                    });
                 }
            })
        }


function addEntry() { //выполняет запрос в бд отдали в функцию requestAllEntries массив
    let request =  new FormData(document.forms[0]);
    fetch("planner.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.json())
    // .then(result);
    // requestAllEntries()
    };


function onClickEntry(event) {//по нажатию на запись выводим ее в правый блок
    blockRight.innerHTML= '';
    let inputUsers = document.createElement("input");
    blockRight.appendChild(inputUsers);
    inputUsers.className ="block_right";
    inputUsers.name = "users";
    inputUsers.type = "text";
    inputUsers.id = "inp1";

    let space = document.createElement("br");
    inputUsers.after(space);
    let space2 = document.createElement("br");
    inputUsers.after(space2);

    let inputUsers2 = document.createElement("input");
    blockRight.appendChild(inputUsers2);
    inputUsers2.className ="block_right";
    inputUsers2.name = "days";
    inputUsers2.type = "date";
    inputUsers2.id = "inp2";

    let space3 = document.createElement("br");
    inputUsers2.after(space3);
    let space23 = document.createElement("br");
    inputUsers2.after(space23);

    let inputUsers3 = document.createElement("input");
    blockRight.appendChild(inputUsers3);
    inputUsers3.className ="block_right2";
    inputUsers3.name = "textarea";
    inputUsers3.type = "text";
    inputUsers3.id = "inp3";

    inputUser = document.createElement("input");
    blockRight.appendChild(inputUser);
    inputUser.className ="search-field";
    inputUser.name = "id";

    inputUser.type = "hidden";
    inputUser.id = "inp11";


    let buttonСhange = document.createElement("input");
    blockRight.appendChild(buttonСhange);
    buttonСhange.className ="save";
    buttonСhange.name = "registr";
    buttonСhange.type = "button";
    buttonСhange.value = "изменить";
    buttonСhange.onclick = addChanges;
    currentTask = tasks.get(event.target.id);
    console.log("event.target", event.target);
    let userInput = document.getElementById('inp1');
    console.log(userInput);
    userInput.value = currentTask.user;
    currentTime = tasks.get(event.target.days);
    let userData = document.getElementById('inp2');
    userData.value = currentTask.days;
    let userText = document.getElementById('inp3');
    userText.value = currentTask.textarea;
    inputUser.value = currentTask.id;//значению users присваиваем id

};

// function myFunction() {
//     let input, filter;
//     input = document.getElementById('');
//     filter = input.value.toUpperCase();
//     for (i=0; i<tasks.length; i++){
//
//     }
//
// }
//
