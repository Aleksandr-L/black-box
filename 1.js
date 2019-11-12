function registr(event) {
    event.preventDefault();
    let request =  new FormData(document.forms[0]);
    fetch("chek.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.text())
        .then(result => {
            if (result == "" ) {
                window.location.href = "planner.php";
            }
            else { document.body.append(result)};
        });
}