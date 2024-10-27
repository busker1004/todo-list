import { useState } from "react";
import styled from "@emotion/styled"

import { TodoInterface } from "../types/TodoType";

interface AddTodoInterface {
    onAdd: (item: TodoInterface) => void
    newIndex: number
}

export default function AddTodo({onAdd, newIndex}: AddTodoInterface) {
    const [todoText, setTodoText] = useState('')
    
    const handleAdd = () => {
        if(!todoText) return

        onAdd({id: newIndex, title: todoText, done: false})
        setTodoText('')
    }
    return (
        <Wrapper>
            <input style={{width:'100%', border: '1px solid black'}} type="text" value={todoText} placeholder="Add Todo" onChange={(e) => setTodoText(e.currentTarget.value)} />
            <AddButton onClick={handleAdd}>Add</AddButton>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    width: 100%;
    margin: 18px;
    display: flex;
    border-radius: 4px;
`

const AddButton = styled.button`
    background-color: coral;
    border-radius: unset;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
`
/*
*/