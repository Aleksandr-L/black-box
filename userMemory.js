(function () {
    App.userMemory = userMemory;
    function userMemory(className, key,  task) {
        let userNote = document.createElement("div");
        if(task){
        userNote.innerHTML = task[key];//точечная нотация
        userNote.dataset.id = task.id;}
        userNote.className = className;
        return userNote;
    }
})();
//App.userMemory();
