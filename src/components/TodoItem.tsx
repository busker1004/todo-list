import { ChangeEvent } from "react";
import { HiOutlineTrash } from "react-icons/hi";

import styled from "@emotion/styled";

import { TodoInterface } from "../types/TodoType";

interface TodoItemInterface {
    todo: TodoInterface
    onDelete: (item:TodoInterface) => void
    onUpdate: (item: TodoInterface) => void
}

export default function TodoItem({todo, onDelete, onUpdate}: TodoItemInterface) {
    const handleDone = (e: ChangeEvent<HTMLInputElement>) => {
        const newItem = {...todo, done: e.currentTarget.checked}
        
        onUpdate(newItem)
    }

    return (
        <Wrapper>
            <input type='checkbox' id={`${todo.id}+${todo.title}`} onChange={handleDone} checked={todo.done}/>
            <Title checked={todo.done} htmlFor={`${todo.id}+${todo.title}`}>{todo.title}</Title>
            <TrashIcon><HiOutlineTrash width='100%' height='100%' onClick={() => onDelete(todo)}/></TrashIcon>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    margin-bottom: 4px;
`

const Title = styled.label<{checked: boolean}>`
    flex: 1;
    text-align: left;
    margin-left: 4px;
    text-decoration: ${({checked}) => checked ? 'line-through': 'unset'};
    color: ${({checked}) => checked ? 'gray': 'black'}; 
`

const TrashIcon = styled.div`
    width: 20px;
    height: 20px;
    :hover {
        transition: all 0.3s linear;
        transform: scale(1.5);
    }
`