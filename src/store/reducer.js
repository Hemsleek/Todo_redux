const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat({
                todo: action.payload.todo,
                id: action.payload.id,
                done: false
            })
            break;
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id)
            break;

        case 'TODO_DONE':
            return state.map(todo => {
                if (todo.id === action.payload.id) todo.done = !todo.done
                return todo
            })
            break;
        default:
            return state;
            break;
    }
}

export default reducer