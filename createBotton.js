(function () {
    App.createBotton = createBotton;
    function createBotton(name, type, value) { //кнопка вызова
        let buttonSave = document.createElement("input");
        buttonSave.className = "block_right";
        buttonSave.className = "save";
        buttonSave.name = name;
        buttonSave.type = type;
        buttonSave.value = value;
        return buttonSave;
    }
})();
App.createBotton();