
let search = document.addEventListener("DOMContentLoaded",function () {
    document.querySelector('#out').onkeyup = function () {
        //debugger
        let val = this.value.trim();
        let outItems = document.querySelectorAll(".entry-note");
        if(val !=""){
            outItems.forEach(function(divElement){
                if (divElement.innerText.indexOf(val) == -1){
                    divElement.classList.add('displayHidden');
                }
                else {
                    divElement.classList.remove("displayHidden");
                }
            });
        }
    }
});
App.search = search;