// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // "Add Task" button
    const taskInput = document.getElementById('task-input');   // Input field
    const taskList = document.getElementById('task-list');     // UL element

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't save again
    }

    // Save tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push(li.firstChild.textContent); // get text content of task
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to create a remove button
    function createRemoveButton(li) {
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn');

        removeButton.addEventListener('click', function () {
            taskList.removeChild(li);
            saveTasks(); // Update Local Storage after removal
        });

        return removeButton;
    }

    // Function to add a new task
    // 'save' parameter: true = also save to Local Storage
    function addTask(taskText, save = true) {
        if (!taskText) return;

        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item');

        const removeButton = createRemoveButton(li);
        li.appendChild(removeButton);

        taskList.appendChild(li);

        if (save) {
            saveTasks(); // Update Local Storage after adding task
        }
    }

    // Event listener for "Add Task" button
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        addTask(taskText);
        taskInput.value = '';
    });

    // Event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText === '') {
                alert('Please enter a task.');
                return;
            }
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Load tasks from Local Storage on page load
    loadTasks();
});
