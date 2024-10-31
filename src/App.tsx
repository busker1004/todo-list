import { useMemo, useReducer } from 'react'

import TodoItem from '@components/TodoItem'
import AddTodo from '@components/AddTodo'

import { TodoInterface } from '@appTypes/TodoType'

import { ADD_TASK, DELETE_TASK, todos as tasks, UPDATE_TASK } from './reducers/Task'
import styled from '@emotion/styled'
import Header from '@components/Header'

import './App.css'
import { useFilter } from './hooks/useFilter'


function App() {
  const [todos, dispatch] = useReducer(tasks, [])
  const {filterMode} = useFilter()

  const filteredTodos = useMemo(() => {
    switch(filterMode) {
      case 'all' :
        return todos
      case 'active' :
        return todos.filter((todo) => !todo.done)
      case 'complete':
        return todos.filter((todo) => todo.done)
    }
  },[filterMode, todos])
  
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
      <Wrapper>
        <Header/>
        {filteredTodos.length ?
          filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onUpdate={onUpdate}/>)
        : <div>No todos!</div>}
        <AddTodo onAdd={onAdd} newIndex={todos.length ? todos[todos.length-1].id + 1 : 0}/>
      </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export default App
