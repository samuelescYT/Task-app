//Dark mode toggler
var switchColor = document.querySelector('.colorModeToggle');
switchColor.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    switchColor.classList.toggle('active');
    //Guardamos el modo eln local storage
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    }
    else {
        localStorage.setItem('dark-mode', 'false');
    }
});
//Obtenemos el modo actual
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    switchColor.classList.add('active');
}
else {
    document.body.classList.remove('dark');
    switchColor.classList.remove('active');
}
// FORM
var form = document.querySelector('.formulario');
var title = document.querySelector('.task-title');
var description = document.querySelector('.task-description');
var btnSubmit = document.querySelector('.submit-task');
// OPTIONS
var taskCounter = document.querySelector('.counter');
var deleteAll = document.querySelector('.delete');
// TASK
var taskList = document.querySelector('.task-list');
var counter = 0;
taskCounter.innerText = 'Task counter: ' + counter;
// EVENTOS
function deleteSelf() {
    this.parentNode.removeChild(this);
    counter--;
    taskCounter.innerText = 'Task counter: ' + counter;
}
deleteAll.addEventListener('click', function () {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    counter = 0;
    taskCounter.innerText = 'Task counter: ' + counter;
});
btnSubmit.addEventListener('click', function () {
    var taskTitle = title.value;
    if (taskTitle == '') {
        return false;
    }
    var taskDescription = description.value;
    if (taskDescription == '') {
        var newTask = document.createElement('li');
        var newTaskTitle = document.createElement('div');
        newTaskTitle.classList.toggle('task-title');
        newTaskTitle.append(taskTitle);
        newTask.append(newTaskTitle);
        newTask.addEventListener('click', deleteSelf);
        taskList.append(newTask);
        counter++;
        taskCounter.innerText = 'Task counter: ' + counter;
        form.reset();
    }
    else {
        var newTask = document.createElement('li');
        var newTaskTitle = document.createElement('div');
        var newTaskDescription = document.createElement('div');
        newTaskTitle.classList.toggle('task-title');
        newTaskDescription.classList.toggle('task-description');
        newTaskTitle.append(taskTitle);
        newTaskDescription.append(taskDescription);
        newTask.append(newTaskTitle);
        newTask.append(newTaskDescription);
        newTask.addEventListener('click', deleteSelf);
        taskList.append(newTask);
        counter++;
        taskCounter.innerText = 'Task counter: ' + counter;
        form.reset();
    }
});
