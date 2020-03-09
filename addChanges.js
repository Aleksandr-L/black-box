(function () {
    App.addChanges = addChanges;
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
                    App.requestAllEntries();

                }
            )};
})();
App.addChanges();