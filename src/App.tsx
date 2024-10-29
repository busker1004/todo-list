import { useReducer } from 'react'

import TodoItem from '@components/TodoItem'
import AddTodo from '@components/AddTodo'

import { TodoInterface } from '@appTypes/TodoType'

import { ADD_TASK, DELETE_TASK, todos as tasks, UPDATE_TASK } from './reducers/Task'
import './App.css'

function App() {
  const [todos, dispatch] = useReducer(tasks, [])

  const onAdd = (item: TodoInterface) => {
    dispatch({type: ADD_TASK, item})
  }

  const onDelete = (item: TodoInterface) => {
    dispatch({type: DELETE_TASK, item})
  }

  const onUpdate = (item: TodoInterface) => {
    dispatch({type:UPDATE_TASK, item})
  }

  return (
    <div>
      {todos.length ?
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate}/>)
       : <div>No todos!</div>}
       <AddTodo onAdd={onAdd} newIndex={todos.length ? todos[todos.length-1].id + 1 : 0}/>
    </div>
  )
}

export default App
