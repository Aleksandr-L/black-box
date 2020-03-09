(function () {
    App.userNotes = userNotes;
function userNotes(id, value) {
    let userInput = document.getElementById(id);
    userInput.value = value;
    return userInput;
}
})();
//App.userNotes();