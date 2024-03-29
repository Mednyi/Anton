// https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/users
import { initApp, handleSubmit } from "./modules/event";

// Globals
const todoList = document.getElementById('todo-list');
const userSelect = document.getElementById('user-todo');
const form = document.querySelector('form');
let todos = [];
let users = [];

// Attach events
document.addEventListener('DOMContentLoaded', () => initApp(userSelect, todoList, todos, users));
form.addEventListener('submit', handleSubmit);

// // Basic logic about rendering items of list todo

// function getUserName(userId) {
//     const user = users.find(u => u.id === userId);

//     return user.name;
// }

// function printTodo({id, userId, title, completed}) {
//     const li = document.createElement('li');
//     li.className = 'todo-item';
//     li.dataset.id = id;
//     li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(userId)}</b></span>`;

//     const status = document.createElement('input');
//     status.type = 'checkbox';
//     status.checked = completed;
//     status.addEventListener('change', handleTodoChange);

//     const close = document.createElement('span');
//     close.innerHTML = '&times;';
//     close.className = 'close';
//     close.addEventListener('click', handleClose);

//     li.prepend(status);
//     li.append(close);

//     todoList.prepend(li);
// }

// function createUserOption(user) {
//     const option = document.createElement('option');
//     option.value = user.id;
//     option.innerText = user.name;

//     userSelect.append(option);
// }

// function removeTodo(todoId) {
//     todos = todos.filter(todo => todo.id !== todoId);
    
//     const todo = todoList.querySelector(`[data-id="${todoId}"]`);
//     todo.querySelector('input').removeEventListener('click', handleTodoChange);
//     todo.querySelector('.close').removeEventListener('click', handleClose);

//     todo.remove();
// }

// function alertError(error) {
//     alert(error.message);
// }

// // Event logic
// function initApp() {
//     Promise.all([getAllTodos(), getAllUsers()]).then(values => {
//         [todos, users] = values;

//         // Отправить в разметку
//         todos.forEach(todo => printTodo(todo));
//         users.forEach(user => createUserOption(user));
//     })
// }

// function handleSubmit(event) {
//     event.preventDefault();

//     createTodo({
//         userId: Number(form.user.value),
//         title: form.todo.value,
//         completed: false,
//     })
// }

// // Async functions
// async function getAllTodos() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');
//         const data = response.json();

//         return data;
//     } catch (error) {
//         alertError(error);
//     }
// };

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = response.json();

//         return data;
//     } catch (error) {
//         alertError(error);
//     }
// };

// async function createTodo(todo) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
//             method: 'POST',
//             body: JSON.stringify(todo),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });

//         const newTodo = await response.json();
    
//         printTodo(newTodo);
//     } catch (error) {
//         alertError(error);
//     }
// }

// async function toggleTodoComplete(todoId, completed) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
//             method: 'PATCH',
//             body: JSON.stringify({completed}),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })

//         const data = await response.json();
//         console.log(data);

//         if (!response.ok) {
//             throw new Error('Failer to connect with server! Please try later');
//         }
//     } catch (error) {
//         alertError(error);
//     }
// }

// async function deleteTodo(todoId) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
    
//         if (response.ok) {
//             removeTodo(todoId);
//         } else {
//             throw new Error('Failer to connect with server! Please try later');
//         }
//     } catch (error) {
//         alertError(error);
//     }
// }
