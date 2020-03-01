function userMemory(className, key,  task) {
    let userNote = document.createElement("div");
    if(task){
        console.log(key,task[key]);
        userNote.innerHTML = task[key];//точечная нотация
        userNote.dataset.id = task.id;}
    userNote.className = className;
    return userNote;
}