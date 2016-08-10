$(document).ready(function () {
    var list = document.getElementById('list');

    $("#save").click(function (e) {
        e.preventDefault();
        localStorage.setItem('todoList', list.innerHTML);
    });

    $("#clear").click(function (e) {
        e.preventDefault();
        localStorage.clear();
        location.reload();
    });

    function loadToDo() {
        if (localStorage.getItem('todoList')) {
            list.innerHTML = localStorage.getItem('todoList');
        }
    }

    // init
    loadToDo();
});