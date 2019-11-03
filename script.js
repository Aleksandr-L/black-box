document.addEventListener("DOMContentLoaded", actionFunc);
function actionFunc() {
        divFuncBook();
        divFunc();
        poleLogin();
        divFunc();
        polePassword();
        divFunc();
        poleConfirm();
        divFunc();
        poleEmail();
        divFunc();
        buttonRegistr();
    }

    function registr(event) {
        event.preventDefault();
    let request =  new FormData(document.forms[0]);
    fetch("registr.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.text())
        .then(result => {
            if (result == "" ) {
                window.location.href = "login.php";
            }
            else { document.body.append(result)};
        });
    }
