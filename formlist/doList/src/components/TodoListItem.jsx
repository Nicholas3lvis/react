import React from 'react'
import Todoitem from "./Todoitem";
import design from './Todolistitem.module.css'
export default function TodoListItem({todos,setTodos}) {
  return (
    <div className={design.todoItem}>
        
        {todos.map((item)=>( 
                <Todoitem
                   key={item.name} 
                   item={item}
                   todos={todos}
                   setTodos={setTodos} 
                />  
            ))}
        
    </div> 
  )
}
