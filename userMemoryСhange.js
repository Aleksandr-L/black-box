(function () {
    App.userMemoryСhange = userMemoryСhange;
function userMemoryСhange(className, innerHTML,  task) {
    let userNote = document.createElement("div");
    userNote.innerHTML = innerHTML;
    userNote.className = className;
    return userNote;
}
})();
App.userMemoryСhange();