function addNewNote (event) {//добавить новую запись
    addEntry();// отображает данные на страницу влевой части
    setTimeout(requestAllEntries, 500);// после добавления записи обновляем список
    document.getElementById("data").addEventListener("click", onClickEntry);// при нажатии на запись переходит в правый блок
};