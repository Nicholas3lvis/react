import React from 'react'
import styles from './Toheader.module.css'
export default function Toheader({sumTaskDone,sumTask}) {
  return (
    <div>
       <h1 className={styles.header}>
        {" "}
        TO DO LIST{" "}
        <span
          style={{
            backgroundColor:'#C86A2B',
            padding:'15px',
            borderRadius:'10px',
            marginLeft:'70px',
            boxShadow:'0 6px 12px rgba(0,0,0,0,0.3)',
            opacity:'0.9',
          }}
        >
          Total: [Task: {sumTask}, Done:{sumTaskDone}]
        </span>       
        </h1>
    </div>
  )
}
