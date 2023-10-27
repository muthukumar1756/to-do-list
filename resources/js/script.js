let taskList = document.getElementById("task-list");

function addEmptyMessage(){
    let emptyMessage = document.createElement("p");
    emptyMessage.setAttribute("id","empty");
    emptyMessage.textContent="Your list is empty";
    taskList.append(emptyMessage);
}

addEmptyMessage();

function removeEmptyMessage() {
    const message = document.getElementById("empty");
    if (message) {
        message.remove();
    }
}

function addTask() {
    let task = document.getElementById("task-name");
    let taskName = task.value;
    if (taskName !== "") { 
        removeEmptyMessage();
        let newTask = document.createElement("li");
        let newTaskName = document.createElement("h5");
        newTaskName.textContent = taskName;
        newTaskName.addEventListener("click",() => {newTaskName.classList.toggle("strike-text")});
        newTask.appendChild(newTaskName);

        let removeButton = document.createElement("button");
        removeButton.textContent = "x";
        removeButton.setAttribute("class","remove-button");

        removeButton.addEventListener("click",() => {removeTask(newTask)});
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);
        task.value = "";
    }
    else{
        alert("Enter a task name");
    }
}

function removeTask(newTask){
    newTask.remove();
    if (taskList.children.length === 0) {
        addEmptyMessage();
    }
}
