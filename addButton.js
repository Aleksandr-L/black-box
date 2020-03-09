let currentTask;
const tasks = new Map();
let AddNewNote = document.querySelector('.note');
let blockRight = document.querySelector(".search-field");
let mainUnit = document.querySelector(".entry");// главный блок
//App.requestAllEntries(); //показывает записи при первоначальной загрузке
(function () {
    App.requestAllEntries = requestAllEntries;
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
                    let divContainer = App.userMemoryClass("entry-note");
                    divContainer.dataset.id = task.id;
                    let userNote = App.userMemory( "title", "user", task);//заметка пользователя
                   // userNote.innerHTML = task.user; //в див вставляемимя имя пользователя из массива
                   //  mainUnit.appendChild(userNote);
                    userNote.onclick = App.clickDivElement;
                    divContainer.append(userNote);

                    let dateOfRecording = App.userMemoryDate("data","days", task);//дата
                    divContainer.append(dateOfRecording);
                    //dateOfRecording.innerHTML =task.days;

                    let noteChange = App.userMemoryNoteChange("change");// изменения заметка
                    divContainer.append(noteChange);

                    let linkChange = App.userMemoryСhange("change", "&#128396;;", task);//ссылка для изменения
                    //linkChange.innerHTML = "&#128396;";
                    noteChange.append(linkChange);
                    linkChange.onclick = App.onClickEntry;

                    let noteDelete = App.userMemoryDelete( "delete");//будет div delete
                    divContainer.append(noteDelete);

                    let linkNoteDelete = App.linkDelete("delete","&#10005;",task);
                    noteDelete.append(linkNoteDelete);
                    mainUnit.append(divContainer);
                });
                 }
            })
        }
})();
App.requestAllEntries();
















