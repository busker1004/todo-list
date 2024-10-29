import { TodoInterface } from "@/types/TodoType"

export const ADD_TASK = 'TASK/ADD' as const
export const DELETE_TASK = 'TASK/DELETE' as const
export const UPDATE_TASK = 'TASK/UPDATE' as const

export const addTodo = (item: TodoInterface) => ({type: ADD_TASK, item})
export const removeTodo = (item: TodoInterface) => ({type: DELETE_TASK, item})
export const updateTodo = (item: TodoInterface) => ({type: UPDATE_TASK, item})

type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof updateTodo>;

const initialState: TodoInterface[] = []

export const todos = (state = initialState, action: TodoAction) => {
    switch(action.type) {
        case ADD_TASK:
            return [...state,action.item]
        case DELETE_TASK:
            return state.filter(todo => todo.id !== action.item.id)
        case UPDATE_TASK:
            return state.map(t => {
                if (t.id === action.item.id) {
                  return action.item;
                } else {
                  return t;
                }
              })
        default: 
            return state
    }
}

   