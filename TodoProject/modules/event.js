import {getAllTodos, getAllUsers} from './async';
import {printTodo, createUserOption} from './basic';
// Event logic
function initApp(userSelect, todoList, todos, users) {
    Promise.all([getAllTodos(), getAllUsers()]).then(values => {
        [todos, users] = values;
        console.log(values);
        // Отправить в разметку
        todos.forEach(todo => printTodo(todoList, users, todos, todo));
        users.forEach(user => createUserOption(userSelect, user));
    })
}

function handleSubmit(event) {
    event.preventDefault();

    createTodo({
        userId: Number(form.user.value),
        title: form.todo.value,
        completed: false,
    })
}

function handleTodoChange() {
    const todoId = this.parentElement.dataset.id;
    const completed = this.checked;

    toggleTodoComplete(todoId, completed);
}

function handleClose() {
    const todoId = this.parentElement.dataset.id;
    deleteTodo(todoId);
}

export {
    initApp,
    handleSubmit,
    handleTodoChange,
    handleClose
}