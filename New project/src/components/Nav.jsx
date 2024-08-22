import React from "react";
import {Link} from 'react-router-dom';
import Design from './css/Pages.module.css'
export default function Nav(){
    return(
        <div>
            <div className={Design.menu}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to= '/About'>About</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/Support'>Support</Link></li>
            </div>
        </div>
    )
}