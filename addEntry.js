
//(function () {
    App.addEntry = addEntry;
function addEntry() { // добавить запись выполняет запрос в бд отдали в функцию requestAllEntries массив
    let request =  new FormData(document.forms[0]);
    fetch("planner.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.json())
};
//})();
//App.addEntry();


