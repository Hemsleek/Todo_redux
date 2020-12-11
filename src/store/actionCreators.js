export const addTodo = (id, todo) => ({
    type: 'ADD_TODO',
    payload: {
        id, todo
    }
})

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: {
        id
    }
})

export const todoDone = (id) => ({
    type: 'TODO_DONE',
    payload: {
        id
    }
})