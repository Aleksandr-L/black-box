let a = document.querySelector('.search');
let AddNewNote = document.querySelector('.note');
let button_save = document.querySelector('.save');
let div = document.querySelector(".block-left");
let div2 = document.querySelector(".block-right");
let blockRight = document.querySelector(".search-field");
let dataDiv = document.getElementById("data");
let entry = [];
let editedEntry;
let par = document.querySelector(".entry");
let inputUsers = document.querySelector(".input");
requestAllEntries(); //показывает записи при первоначальной загрузке
let buttonСhange = document.querySelector('.change');
let buttonСhange2 = document.querySelector('.change');
let paragraph2 = document.querySelector('.entry');

let divElement = document.querySelector(".entry");
let inputUser = document.querySelector(".displayHidden");
const tasks = new Map();
let currentTask;
let result;
function addChanges() {
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
                result = response;
                requestAllEntries();
            }
            )};
AddNewNote.onclick = ()=> {
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

function getFocusedEntry(id) {//фильтрует и возвращает массив, присваивает id
    return tasks.filter((el) => el.id === id)[0];//используется для фильтрации массива через функцию.
};

function requestAllEntries() {//принимает  данные из фукции addEntry и обрабатывает

    fetch("planner_Get.php", {
        method: 'POST'
    })
        .then(response => response.json())
        .then(result => {
            if (Array.isArray(result)) {// проверка что массив это массив
                dataDiv.innerText = '';
                tasks.clear();
                result.forEach(task => {
                   tasks.set(task.id, task);
                });
                // entry = result;// в массив записей положили результат из бд
                tasks.forEach((task) => {// перебираем массив
                    divElement = document.createElement("div");
                    divElement.id = task.id; //диву присвоили id элемента из бд
                    divElement.className = "entry";
                    divElement.innerHTML = task.user;
                    // divElement.onclick = onClickEntry(event);
                    dataDiv.appendChild(divElement);

                    let paragraph = document.createElement('a');
                    paragraph.href = "delete.php?id=" + task.id;//добавляем индентификатор к строке
                    paragraph.className = "entry";
                    paragraph.name = "удалить";
                    paragraph.innerHTML = "&Chi;";
                    divElement.append(paragraph);

                    // let space = document.createElement("br");
                    // paragraph.after(space);
                    paragraph2 = document.createElement('a');
                    paragraph2.class = "entry";
                    paragraph2.name = "изменить";
                    paragraph2.innerHTML = "изменить";
					paragraph2.id = task.id;
                    divElement.append(paragraph2);
                    paragraph2.onclick = onClickEntry;
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

    //добавить поле hidden
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
   // buttonСhange.onclick = addEntry;
    inputUser.value = currentTask.id;//значению users присваиваем id
};


// let focusedEntry = getFocusedEntry(event.target.id);//тут массив entrys фильтром перебираем el event.target -это исходный элемент, на котором произошло событие
// blockRight.id = focusedEntry.id;//по id и (event.target.id) сравниваем с id в бд на что нажали мышкой
// blockRight.className = "focusedEntry";// класс в scc
// blockRight.innerHTML = focusedEntry.user; //  вправый блок ложим то что получили из массива


