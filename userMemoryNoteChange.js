(function () {
    App.userMemoryNoteChange = userMemoryNoteChange;
function userMemoryNoteChange(className) {
    let userNote = document.createElement("div");
    userNote.className = className;
    return userNote;
}
})();
App.userMemoryNoteChange();