// Async functions
export function getAllTodos() {
    // try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=15');
    //     const data = response.json();

    //     return data;
    // } catch (error) {
    //     alertError(error);
    // }
    return fetch('https://jsonplaceholder.typicode.com/todos?_limit=15').then((response) => response.json());
};

export function getAllUsers() {
    // try {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = response.json();

    //     return data;
    // } catch (error) {
    //     alertError(error);
    // }
    return fetch('https://jsonplaceholder.typicode.com/users').then((response) => response.json());
};

// export async function createTodo(todo) {
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

// export async function toggleTodoComplete(todoId, completed) {
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

export function deleteTodo(todoId) {
    // try {
    //     const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     });
    
    //     if (response.ok) {
    //         removeTodo(todoId);
    //     } else {
    //         throw new Error('Failer to connect with server! Please try later');
    //     }
    // } catch (error) {
    //     alertError(error);
    // }

    return fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            if (response.ok) {
                // removeTodo(todoId);
                return true;
            } else {
                throw new Error('Failer to connect with server! Please try later');
            }
        })
}