import React, { useState } from 'react';
import Forms from './Forms';
import TodoListItem from './TodoListItem';
import Toheader from './Toheader';
export default function Todo() {
    const [todos, setTodos] = useState([]) 
    const sumTaskDone = todos.filter((todo) => todo.status).length;
    const sumTask = todos.length;
    return (
        <div>
            <Toheader
             sumTask = {sumTask}
            sumTaskDone={sumTaskDone}
            />
            <Forms
                todos={todos}
                setTodos={setTodos}
            />
            <TodoListItem
                todos={todos}
                setTodos={setTodos}
            /> 
        </div>
    );
}  