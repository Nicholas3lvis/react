import React from 'react'
import design from './Todoitem.module.css' 
export default function Todoitem({item,todos,setTodos}) {
  function handleClick(name){
    const newArray = todos.map((todo)=>
     todo.name===name?{ ...todo,status: !todo.status}:todo);
    setTodos(newArray)  
    // console.log(todos)
  }
  function handledelete(item){
    console.log('delete item clicked',item)
    setTodos(todos.filter((todo) => todo !=item));
  }
  const task = item.status ? design.completed : '';
  return (
    <nav className={design.result}>
      <div className={design.itemValue}>
         <span className={task} onClick={() => handleClick(item.name)}>
          {item.name}
         </span>
        <span>
          <button
            onClick={() => handledelete(item)}
            className={design.itemButton} 
          >
            x
          </button>
        </span>
      <hr className={design.line} />
      </div> 
    </nav>
  )
}
