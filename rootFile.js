let App = {};

(function () {
    App.createInput = createInput;
    function createInput(id, name, type, className) {//создать поля ввода
        let fieldUsers = document.createElement("input");
        fieldUsers.className = className;
        fieldUsers.name = name;
        fieldUsers.type = type;
        fieldUsers.id = id;
        return fieldUsers;
    }
})();
App.createInput();
console.log(App);