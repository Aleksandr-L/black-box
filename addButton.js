let a = document.querySelector('.search');
let AddNewNote = document.querySelector('.note');
let button_save = document.querySelector('.save');
let div = document.querySelector(".block-left");
let div2 = document.querySelector(".block-right");
let blockRight = document.querySelector(".search-field");
let dataDiv = document.getElementById("data");
let entrys = [];
let par = document.querySelector(".entry");
let inputUsers = document.querySelector(".input");



AddNewNote.onclick = ()=> {
    blockRight.innerHTML= '';
    let inputUsers = document.createElement("input");
    blockRight.appendChild(inputUsers);
    inputUsers.className ="block_right";
    inputUsers.name = "users";
    inputUsers.type = "text";

    let space = document.createElement("br");
    inputUsers.after(space);
    let space2 = document.createElement("br");
    inputUsers.after(space2);

    let inputUsers2 = document.createElement("input");
    blockRight.appendChild(inputUsers2);
    inputUsers2.className ="block_right";
    inputUsers2.name = "days";
    inputUsers2.type = "date";


    let space3 = document.createElement("br");
    inputUsers2.after(space3);
    let space23 = document.createElement("br");
    inputUsers2.after(space23);

    let inputUsers3 = document.createElement("input");
    blockRight.appendChild(inputUsers3);
    inputUsers3.className ="block_right2";
    inputUsers3.name = "textarea";
    inputUsers3.type = "text";

    let button_save = document.createElement("input");
    blockRight.appendChild(button_save);
    button_save.className ="save";
    button_save.name = "registr";
    button_save.type = "button";
    button_save.value = "save";






    requestAllEntries();// срабатывает при первоначальной загрузки

    button_save.onclick = function (event) {
        //event.preventDefault();
        addEntry();
        setTimeout(requestAllEntries, 500);// после добавления записи обновляем список

    };
    document.getElementById("data").addEventListener("click", onClickEntry);

};

function onClickEntry(event) {
    const focusedEntry = entrys.filter((el) => el.id === event.target.id)[0];//тут массив entrys фильтром перебираем el
    blockRight.id = focusedEntry.id;//по id и (event.target.id) сравниваем с id в бд на что нажали мышкой
    blockRight.className = "focusedEntry";
    blockRight.innerHTML = focusedEntry.user; //  вправый блок ложим то что получили из массива

}

function requestAllEntries() {

    fetch("planner_Get.php", {
        method: 'POST'
        })
        .then(response => response.json())
        .then(result =>{
            if (Array.isArray(result)) {// проверка что массив это массив
                dataDiv.innerText = '';
                entrys = result; // в массив записей положили результат из бд
                result.forEach((entry) => {
                    const divElement = document.createElement("div");
                    divElement.id = entry.id; //диву присвоили id элемента из бд
                    //добавить ссылку
                    divElement.className = "entry";
                    divElement.innerHTML = entry.user;
                    // divElement.onclick = onClickEntry(event);
                    dataDiv.appendChild(divElement);
                    let paragraph = document.createElement('a');
                    paragraph.href= "delete.php";
                    paragraph.className = "entry";
                    //paragraph.insertBefore("a");
                    paragraph.name = "удалить";
                    paragraph.innerHTML = "&Chi;";
                    divElement.appendChild(paragraph);
                    // let space3 = document.createElement("br");
                    // paragraph.prepend(space3);

                });
            }
        });
}

function addEntry() {
    let request =  new FormData(document.forms[0]);
    fetch("planner.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.json())
        .then(result =>{
            console.warn(result);
            if (result == "" ) {
                window.location.href = "planner_Get.php";
            }
            else { document.body.append(result)};
        });
}

    // var paragraph = document.querySelector('.display'),
    // var text = paragraph.querySelector('.text');
    //
    //  text = paragraph.dataset.link;
    //
    // var a = document.createElement('a');
    //
    // var a.href = link;
    //
    // var oldChild = paragraph.removeChild(text);
    //
    // paragraph.insertBefore(a, paragraph.firstChild);
    //
    // a.innerHTML = oldChild.outerHTML;


// function chpok2(){
// }
// button_save.onclick = function (event) {
//     //event.preventDefault();
//     let request =  new FormData(document.forms[0]);
//     fetch("planner_Get.php", {
//         method: 'POST',
//         body: request
//     })
//         .then(response => response.text())
//         .then(result =>chpok2())
//         // let button_two = document.createElement("div");
//         // div.appendChild(button_two);
//         // button_two.className = "block-left";
//         //  button_two.innerHTML = chpok2(alert("hi"));
// };
// function registr(event) {
//  //        event.preventDefault();
//     let request =  new FormData(document.forms[0]);
//     fetch("planner_Get.php", {
//         method: 'POST',
//         body: request
//     })
//         .then(response => response.text())
//         .then(result => {registr(result)
//          document.getElementById("data").innerHTML = result;
//
//         let button_two = document.createElement("div");
//         div.appendChild(button_two);
//
//         });
//     }
// function add_title(data) {
//     let button_two = document.createElement("div");
//     div.appendChild(button_two);
//     document.querySelector(".note");
//     button_two.innerHTML = data;
//     button_two.className = "class_1 ";
//     let space = document.createElement("br");
//     div.appendChild(space);
// };
//add_title(request.get("users2"));
// }




