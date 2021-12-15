//Dark mode toggler
const switchColor: HTMLButtonElement = document.querySelector('.colorModeToggle');
switchColor.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    switchColor.classList.toggle('active');

    //Guardamos el modo eln local storage
    if(document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
        
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
})

//Obtenemos el modo actual
if(localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    switchColor.classList.add('active');
} else {
    document.body.classList.remove('dark');
    switchColor.classList.remove('active');
}

// FORM
const form:HTMLFormElement = document.querySelector('.formulario');
const title: HTMLInputElement = document.querySelector('.task-title');
const description: HTMLTextAreaElement = document.querySelector('.task-description');
const btnSubmit: HTMLButtonElement = document.querySelector('.submit-task');

// OPTIONS
const taskCounter: HTMLSpanElement = document.querySelector('.counter');
const deleteAll: HTMLSpanElement = document.querySelector('.delete');

// TASK
const taskList: HTMLUListElement = document.querySelector('.task-list');
let counter:number = 0;
taskCounter.innerText = 'Task counter: '+counter;

// EVENTOS
function deleteSelf() {
    this.parentNode.removeChild(this);
    counter--;
    taskCounter.innerText = 'Task counter: '+counter;
}

deleteAll.addEventListener('click', () => {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    counter = 0;
    taskCounter.innerText = 'Task counter: '+counter;
})

btnSubmit.addEventListener('click', () => {
    let taskTitle: string = title.value;
    if (taskTitle == '') {
        return false;
    }
    let taskDescription: string = description.value;

    
    if (taskDescription == '') {
        let newTask = document.createElement('li');
        let newTaskTitle = document.createElement('div');
        newTaskTitle.classList.toggle('task-title');
        newTaskTitle.append(taskTitle);
        newTask.append(newTaskTitle);
        newTask.addEventListener('click', deleteSelf);
        taskList.append(newTask);
        counter++;
        taskCounter.innerText = 'Task counter: '+counter;
        form.reset();
        
    } else {
        let newTask = document.createElement('li');
        let newTaskTitle = document.createElement('div');
        let newTaskDescription = document.createElement('div');
        newTaskTitle.classList.toggle('task-title');
        newTaskDescription.classList.toggle('task-description');
        newTaskTitle.append(taskTitle);
        newTaskDescription.append(taskDescription);
        newTask.append(newTaskTitle);
        newTask.append(newTaskDescription);
        newTask.addEventListener('click', deleteSelf);
        taskList.append(newTask);
        counter++;
        taskCounter.innerText = 'Task counter: '+counter;
        form.reset();
        
    }

    

})


