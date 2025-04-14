// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = taskText;
        li.onclick = () => toggleTaskCompletion(li);
        taskList.appendChild(li);
        taskInput.value = '';

        saveTasksToLocalStorage();
    }
}

// Function to toggle task completion
function toggleTaskCompletion(taskItem) {
    taskItem.classList.toggle('completed');
    saveTasksToLocalStorage();
}

// Function to remove completed tasks
function clearCompletedTasks() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach((taskItem) => taskItem.remove());
    saveTasksToLocalStorage();
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    const taskList = document.getElementById('taskList');
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    savedTasks.forEach((taskText) => {
        const li = document.createElement('li');
        li.textContent = taskText;
        li.onclick = () => toggleTaskCompletion(li);
        taskList.appendChild(li);
    });
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
    const taskList = document.getElementById('taskList');
    const tasks = [];

    taskList.querySelectorAll('li').forEach((taskItem) => {
        tasks.push(taskItem.textContent);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage on page load
loadTasksFromLocalStorage();  