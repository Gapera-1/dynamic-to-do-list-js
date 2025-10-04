// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // Matches your HTML button ID
    const taskInput = document.getElementById('task-input');   // Input field
    const taskList = document.getElementById('task-list');     // UL element

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and clean input value

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add remove functionality
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button and list item
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Event listener for "Add Task" button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
