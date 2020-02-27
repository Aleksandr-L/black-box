//блок поиска
document.addEventListener("DOMContentLoaded",function () {
document.querySelector('#out').onkeyup = function () {
   //debugger
    let val = this.value.trim();
    let outItems = document.querySelectorAll(".entry-note");
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
//иницилизация переменных
let AddNewNote = document.querySelector('.note');
let blockRight = document.querySelector(".search-field");
let mainUnit = document.querySelector(".entry");// главный блок
requestAllEntries(); //показывает записи при первоначальной загрузке
const tasks = new Map();
let currentTask;
function createSpace (tagName) {//создать пробелы
    let space = document.createElement("br");
    space.name = tagName;
    space.className = "block_right2";
    return space;
}
//функции
function createInput(id, name, type, className) {//создать поля ввода
    let fieldUsers = document.createElement("input");
    fieldUsers.className = className;
    fieldUsers.name = name;
    fieldUsers.type = type;
    fieldUsers.id = id;
    return fieldUsers;
}
function createBotton(name, type, value) { //кнопка вызова
    let buttonSave = document.createElement("input");
    buttonSave.className ="block_right";
    buttonSave.className ="save";
    buttonSave.name = name;
    buttonSave.type = type;
    buttonSave.value = value;
    return buttonSave;
}
function addNewNote (event) {//добавить новую запись
    addEntry();// отображает данные на страницу влевой части
    setTimeout(requestAllEntries, 500);// после добавления записи обновляем список
    document.getElementById("data").addEventListener("click", onClickEntry);// при нажатии на запись переходит в правый блок
};
function clickDivElement(event) {
    let target = event.target.closest(".entry-note");
    let id = target.dataset.id;
    blockRight.id = id;
    blockRight.innerHTML = tasks.get(id).user;
}
function userMemory(className, key,  task) {
    let userNote = document.createElement("div");
    if(task){
        console.log(key,task[key]);
        userNote.innerHTML = task[key];//точечная нотация
        userNote.dataset.id = task.id;}
    userNote.className = className;
    return userNote;
}
function userMemoryСhange(className, innerHTML,  task) {
    let userNote = document.createElement("div");
    userNote.innerHTML = innerHTML;
    userNote.className = className;
    return userNote;
}
function userMemoryNoteChange(className) {
    let userNote = document.createElement("div");
    userNote.className = className;
    return userNote;
}
function userMemoryDelete(className) {
    let userNote = document.createElement("div");
    userNote.className = className;
    return userNote;
}

//блок кода
AddNewNote.onclick = ()=> {// отображает правый блок
    blockRight.innerHTML= '';
    let fieldUsers = createInput("inp1", "users", "text","block_right");
    blockRight.appendChild(fieldUsers);

    let space = createSpace("br");
    fieldUsers.after(space);
    space = createSpace("br");
    fieldUsers.after(space);

    let inputUsers2 = createInput("inp2", "days", "date","block_right");
    blockRight.appendChild(inputUsers2);

    space = createSpace("br");
    inputUsers2.after(space);
    space = createSpace("br");
    inputUsers2.after(space);

    let inputUsers3 = createInput("inp3","textarea","text", "block_right2" );
    blockRight.appendChild(inputUsers3);

    fieldUsers = createInput("inp11", "hidden", "text","search-field" );
    blockRight.appendChild(fieldUsers);

    let buttonSave = createBotton("registr", "button", "save") ;
    blockRight.appendChild(buttonSave);
    buttonSave.onclick = addNewNote;
};

function requestAllEntries() {//принимает  данные из фукции addEntry и обрабатывает

    fetch("planner_Get.php", {
        method: 'POST'
    })
        .then(response => response.json())
        .then(result => {
            if (Array.isArray(result)) {// проверка что массив это массив
                mainUnit.innerText = '';//перезатираем правую часть чтобы появлялась один раз
                result.forEach(task => {//циклом перебираю результат ложу в переменную task
                   tasks.set(task.id, task);
                });
                tasks.forEach((task) => {// перебираем массив
                    let сontainer = userMemory("entry-note");
                    сontainer.dataset.id = task.id;


                    let userNote = userMemory( "title", "user", task);//заметка пользователя
                   // userNote.innerHTML = task.user; //в див вставляемимя имя пользователя из массива
                   //  mainUnit.appendChild(userNote);
                    userNote.onclick = clickDivElement;
                    сontainer.append(userNote);

                    let dateOfRecording = userMemory("data","days", task);//дата
                    сontainer.append(dateOfRecording);
                    //dateOfRecording.innerHTML =task.days;

                    let noteChange = userMemoryNoteChange("change");// изменения заметка
                    сontainer.append(noteChange);
// debugger
                    let linkChange = userMemoryСhange("change", "&#128396;;", task);//ссылка для изменения
                    //linkChange.innerHTML = "&#128396;";
                    noteChange.append(linkChange);
                    linkChange.onclick = onClickEntry;

                    let noteDelete = userMemoryDelete( "delete");//будет div delete
                    сontainer.append(noteDelete);

                    let linkNoteDelete = linkDElete("delete","&#10005;","&#10005;",task);
                    noteDelete.append(linkNoteDelete);
                    mainUnit.append(сontainer);
                });
                 }
            })
        }

function linkDElete(className, name, innerHTML, task) {
    let link = document.createElement('a');//ссылка для удаления
    link.href = "delete.php?id=" + task.id;//добавляем индентификатор к строке
    link.className = className;
    link.name = name;
    link.innerHTML = innerHTML;
    return link;
}
function addEntry() { // добавить запись выполняет запрос в бд отдали в функцию requestAllEntries массив
    let request =  new FormData(document.forms[0]);
    fetch("planner.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.json())
    };
function addChanges() {//добавить изменения, выполняет запрос в бд отдали в функцию requestAllEntries массив
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
function onClickEntry(event) {//при клике на запись выводим ее в правый блок
    blockRight.innerHTML= '';
    let fieldUsers = createInput("inp1", "users", "text", "block_right");
    blockRight.appendChild(fieldUsers);

    let space = createSpace("br");
    fieldUsers.after(space);
    space = createSpace("br");
    fieldUsers.after(space);

    let inputUsers2 = createInput("inp2", "days", "date", "block_right");
    blockRight.appendChild(inputUsers2);

    space = createSpace("br");
    inputUsers2.after(space);
    space = createSpace("br");
    inputUsers2.after(space);

    let inputUsers3 = createInput("inp3","textarea","text");
    inputUsers3.className ="block_right2";
    blockRight.appendChild(inputUsers3);

    fieldUsers = createInput("inp11", "id", "hidden");
    blockRight.appendChild(fieldUsers);
    fieldUsers.className ="search-field";

    let buttonSave = createBotton("registr", "button", "изменить") ;
    blockRight.appendChild(buttonSave);
    buttonSave.onclick = addChanges;

    let target = event.target.closest(".entry-note");
    let id = target.dataset.id;
    currentTask = tasks.get(id);
	let userInput = userNotes("inp1",currentTask.user);
    currentTime = tasks.get(event.target.days);
    let userData = userNotes('inp2', currentTask.days);
    let userText = userNotes('inp3', currentTask.textarea);
    fieldUsers.value = currentTask.id;//значению users присваиваем id
};

function userNotes(id, value) {
	let userInput = document.getElementById(id);
	    userInput.value = value;
	return userInput;
};













