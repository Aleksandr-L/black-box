(function () {
    App.userMemoryDate = userMemoryDate;
    function userMemoryDate(className, key,  task) {
        let userNote = document.createElement("div");
        if(task){
        userNote.innerHTML = task[key];//точечная нотация
        userNote.dataset.id = task.id;}
        userNote.className = className;
        return userNote;
    }
})();
App.userMemoryDate();
