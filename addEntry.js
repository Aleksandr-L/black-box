function addEntry() { // добавить запись выполняет запрос в бд отдали в функцию requestAllEntries массив
    let request =  new FormData(document.forms[0]);
    fetch("planner.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.json())
};
function addChanges() {//добавить изменения, выполняет запрос в бд отдали в функцию requestAllEntries массив
    let request =  new FormData(document.forms[0]);
    fetch("changes.php",{
        method: 'POST',
        body: request
    })
        .then(response => response.text())
        .then(response => {
                // debugger
                result = response; //записываем пришедший результата
                requestAllEntries();
            }
        )};