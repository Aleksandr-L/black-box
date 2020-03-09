//(function () {
    App.linkDelete = linkDelete;
function linkDelete(className,  innerHTML, task) {
    let link = document.createElement('a');//ссылка для удаления
    link.href = "delete.php?id=" + task.id;//добавляем индентификатор к строке
    link.className = className;
   // link.name = name;
    link.innerHTML = innerHTML;
    return link;
};
//});
//App.linkDelete();