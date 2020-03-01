function clickDivElement() {
    App.clickDivElement = clickDivElement;
    let target = event.target.closest(".entry-note");
    let id = target.dataset.id;
    blockRight.id = id;
    blockRight.innerHTML = tasks.get(id).user;
}

clickDivElement();