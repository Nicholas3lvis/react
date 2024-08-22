import React from 'react'
import styles from './Css.module.css'
const heading = {color:'white',backgroundColor:'black',textAlign:'center'}
export default function Introduction() {
  return (
    <div>
       <h1 style={{color:'red',backgroundColor:'yellow',textAlign:'center'}} >INTRODUCTION TO CSS</h1> 
       <h3 style={heading}>INLINE</h3>
       <h3 className='heading'>STYLE SHEET</h3> 
       <h3 className={styles.heading}>MODULES</h3> 
       <h3>FRAME WORK</h3> 
    </div>
  )
}
