let a      = document.querySelector('.search');
let button = document.querySelector('.note');
let button_save = document.querySelector('.save');
let div    = document.querySelector(".block-left");


function chpok(){

}

button_save.onclick = function (event) {
    //event.preventDefault();
    let request =  new FormData(document.forms[0]);
    fetch("planner.php", {
        method: 'POST',
        body: request
    })
        .then(response => response.text())
        .then(result =>chpok())};



function registr(event) {
 //        event.preventDefault();
    let request =  new FormData(document.forms[0]);
    fetch("planner_Get.php", {
        method: 'POST',
        body: request;
    })
        .then(response => response.text())
        .then(result => {
 //            if (result == "" ) {
 //                window.location.href = "login.php";
 //            }
 //            else { document.body.append(result)};
 //        });
 //    }


// function add_title(data) {
//     let button_two = document.createElement("div");
//     div.appendChild(button_two);
//     document.querySelector(".note");
//     button_two.innerHTML = data;
//     button_two.className = "class_1 ";
//     let space = document.createElement("br");
//     div.appendChild(space);
// };
//
//     //add_title(request.get("users2"));
// }
//
// function heandler(data) {
//    // let b = JSON.parse(data);
//     let c = "sdf";
// }
//
//    fetch("planner_Get.php", {
//         method: 'POST'
//     }).then(response => response.json())
//        .then(result =>heandler(result)
//            //document.getElementById("data").innerHTML = result
//        )
//
