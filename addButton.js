let currentTask;
const tasks = new Map();
let AddNewNote = document.querySelector('.note');
let blockRight = document.querySelector(".search-field");
let mainUnit = document.querySelector(".entry");// главный блок
requestAllEntries(); //показывает записи при первоначальной загрузке

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
















