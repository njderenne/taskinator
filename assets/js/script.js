var formEI = document.querySelector("#task-form");
var tasksToDoEI = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();

    var listItemEI = document.createElement("li");
    listItemEI.className = "task-item";
    listItemEI.textContent = "This is a new task.";
    tasksToDoEI.appendChild(listItemEI);
};

formEI.addEventListener("submit", createTaskHandler);