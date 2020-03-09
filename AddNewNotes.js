//(function () {
   App.AddNewNote = AddNewNote;
    AddNewNote.onclick = () => {// отображает правый блок
        blockRight.innerHTML = '';
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

        let inputUsers3 = App.createInput("inp3", "textarea", "text", "block_right2");
        blockRight.appendChild(inputUsers3);

        fieldUsers = App.createInput("inp11", "hidden", "text", "search-field");
        blockRight.appendChild(fieldUsers);

        let buttonSave = App.createBotton("registr", "button", "save");
        blockRight.appendChild(buttonSave);
        buttonSave.onclick = App.addNewNote;
    };
//})();
//App.AddNewNote();