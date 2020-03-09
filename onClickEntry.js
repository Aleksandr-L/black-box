    App.onClickEntry = onClickEntry;
function onClickEntry(event) {//при клике на запись выводим ее в правый блок
    blockRight.innerHTML= '';
    let fieldUsers = App.createInput("inp1", "users", "text", "block_right");
    blockRight.appendChild(fieldUsers);

    let space = App.createSpace("br");
    fieldUsers.after(space);
    space = App.createSpace("br");
    fieldUsers.after(space);

    let inputUsers2 = App.createInput("inp2", "days", "date", "block_right");
    blockRight.appendChild(inputUsers2);

    space = App.createSpace("br");
    inputUsers2.after(space);
    space = App.createSpace("br");
    inputUsers2.after(space);

    let inputUsers3 = App.createInput("inp3","textarea","text");
    inputUsers3.className ="block_right2";
    blockRight.appendChild(inputUsers3);

    fieldUsers = App.createInput("inp11", "id", "hidden");
    blockRight.appendChild(fieldUsers);
    fieldUsers.className ="search-field";

    let buttonSave = App.createBotton("registr", "button", "изменить") ;
    blockRight.appendChild(buttonSave);
    buttonSave.onclick = App.addChanges;

    let target = event.target.closest(".entry-note");
    let id = target.dataset.id;
    currentTask = tasks.get(id);
    let userInput = App.userNotes("inp1",currentTask.user);
    currentTime = tasks.get(event.target.days);
    let userData = App.userNotes('inp2', currentTask.days);
    let userText = App.userNotes('inp3', currentTask.textarea);
    fieldUsers.value = currentTask.id;//значению users присваиваем id
};

