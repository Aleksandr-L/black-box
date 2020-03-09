(function () {
    App.userMemoryClass = userMemoryClass;
    function userMemoryClass(className) {
        let userNote = document.createElement("div");
        userNote.className = className;
        return userNote;
    }
})();
App.userMemoryClass();