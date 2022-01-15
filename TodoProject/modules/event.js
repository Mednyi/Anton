// Event logic
function initApp() {
    Promise.all([getAllTodos(), getAllUsers()]).then(values => {
        [todos, users] = values;

        // Отправить в разметку
        todos.forEach(todo => printTodo(todo));
        users.forEach(user => createUserOption(user));
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