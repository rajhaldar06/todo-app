function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function removeTask(element) {
    element.parentNode.remove();
}
