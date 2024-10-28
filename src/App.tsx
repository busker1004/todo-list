import { useState } from 'react'

import TodoItem from '@components/TodoItem'
import AddTodo from '@components/AddTodo'

import './App.css'
import { TodoInterface } from '@appTypes/TodoType'

function App() {
  const [todos, setTodos] = useState<TodoInterface[]>([{
    id: 0,
    title: '장보기',
    done: false,
  }, {
    id: 1,
    title: '청소하기',
    done: false,
  }])

  const onAdd = (item: TodoInterface) => {
    setTodos([
      ...todos,
      item
    ])
  }

  const onDelete = (item: TodoInterface) => {
    setTodos(
      todos.filter(todo => todo.id !== item.id)
    )
  }

  const onUpdate = (item: TodoInterface) => {
    const newTodos = todos.map((todo) => {
      if(todo.id !== item.id) return todo

      return {
        ...item,
      }
    })

    setTodos(newTodos)
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
