//(function () {
    App.addNewNote = addNewNote;
function addNewNote () {//добавить новую запись
    //alert("hi");
    setTimeout(App.requestAllEntries, 500);// после добавления записи обновляем список
    document.getElementById("data").addEventListener("click", App.onClickEntry);// при нажатии на запись переходит в правый блок
     App.addEntry();// отображает данные на страницу влевой части

};
//})();
//})();
// App.addNewNote();