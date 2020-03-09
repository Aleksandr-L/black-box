(function () {
    App.createSpace = createSpace;
function createSpace (tagName) {//создать пробелы
    let space = document.createElement("br");
    space.name = tagName;
    space.className = "block_right2";
    return space;
}
})();
App.createSpace();