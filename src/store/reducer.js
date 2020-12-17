import { generateId } from '../utils'

const defaultTodos = [{ todo: 'Buy some milks', id: generateId(), done: false },
{ todo: 'Cook some food', id: generateId(), done: false }
]

const reducer = (state = defaultTodos, action) => {
    let result

    switch (action.type) {
        case 'ADD_TODO':
            result = state.concat({
                todo: action.payload.todo,
                id: action.payload.id,
                done: false
            })
            break;
        case 'DELETE_TODO':
            result = state.filter(todo => todo.id !== action.payload.id)
            break;

        case 'TODO_DONE':
            result = state.map(todo => {
                if (todo.id === action.payload.id) todo.done = !todo.done
                return todo
            })
            break;
        default:
            result = state;
            break;
    }

    return result
}

export default reducer