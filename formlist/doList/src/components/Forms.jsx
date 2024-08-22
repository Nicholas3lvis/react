import React, { useState } from 'react';
import styles from './Forms.module.css';
// import Todoitem from './Todoitem'
export default function Forms({todos,setTodos}) {
    const [todo, setTodo] = useState({name:'',status:false});
    function submit(e) {
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name:'',status:false}); 
    }

    return (
        <nav>
            <div>
                <form onSubmit={submit} className={styles.formInput}>
                    <input
                        placeholder='Enter your list'
                        className={styles.inputBtn}
                        onChange={(e) => setTodo({name:e.target.value,status:false})}
                        type="text"
                        value={todo.name}
                    />
                    <button type='submit' className={styles.button}>Add</button>
                </form>
            </div>
           
        </nav>
    );
}