 // Basic logic about rendering items of list todo

function getUserName(userId) {
    const user = users.find(u => u.id === userId);

    return user.name;
}

function printTodo({id, userId, title, completed}) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.dataset.id = id;
    li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(userId)}</b></span>`;

    const status = document.createElement('input');
    status.type = 'checkbox';
    status.checked = completed;
    status.addEventListener('change', handleTodoChange);

    const close = document.createElement('span');
    close.innerHTML = '&times;';
    close.className = 'close';
    close.addEventListener('click', handleClose);

    li.prepend(status);
    li.append(close);

    todoList.prepend(li);
}

function createUserOption(user) {
    const option = document.createElement('option');
    option.value = user.id;
    option.innerText = user.name;

    userSelect.append(option);
}

function removeTodo(todoId) {
    todos = todos.filter(todo => todo.id !== todoId);
    
    const todo = todoList.querySelector(`[data-id="${todoId}"]`);
    todo.querySelector('input').removeEventListener('click', handleTodoChange);
    todo.querySelector('.close').removeEventListener('click', handleClose);

    todo.remove();
}

function alertError(error) {
    alert(error.message);
}