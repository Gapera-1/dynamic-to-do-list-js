// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn'); // "Add Task" button
    const taskInput = document.getElementById('task-input');   // Input field
    const taskList = document.getElementById('task-list');     // UL element

    // Function to create a remove button
    function createRemoveButton(li) {
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-btn'); // Using classList.add

        // Remove functionality
        removeButton.addEventListener('click', function () {
            taskList.removeChild(li);
        });

        return removeButton;
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input and trim spaces

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item'); // Add CSS class

        // Create and append remove button
        const removeButton = createRemoveButton(li);
        li.appendChild(removeButton);

        // Append the list item to the task list
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
