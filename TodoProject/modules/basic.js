 // Basic logic about rendering items of list todo

 import {toggleTodoComplete, deleteTodo} from './async';

function getUserName(users, userId) {
    const user = users.find(u => u.id === userId);

    return user.name;
}

function handleTodoChange() {
    const todoId = this.parentElement.dataset.id;
    const completed = this.checked;

    toggleTodoComplete(todoId, completed);
}

export function printTodo(todoList, users, todos, {id, userId, title, completed}) {
    function handleClose() {
        const todoId = this.parentElement.dataset.id;
        deleteTodo(todoId).then(() => {
            removeTodo(todoId)
        });
    }

    function removeTodo(todoId) {
        todos = todos.filter(todo => todo.id !== todoId);
        
        const todo = todoList.querySelector(`[data-id="${todoId}"]`);
        todo.querySelector('input').removeEventListener('click', handleTodoChange);
        todo.querySelector('.close').removeEventListener('click', handleClose);

        todo.remove();
    }

    const li = document.createElement('li');
    li.className = 'todo-item';
    li.dataset.id = id;
    li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(users, userId)}</b></span>`;

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

export function createUserOption(userSelect, user) {
    const option = document.createElement('option');
    option.value = user.id;
    option.innerText = user.name;

    userSelect.append(option);
}

function alertError(error) {
    alert(error.message);
}