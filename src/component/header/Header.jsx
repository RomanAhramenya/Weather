import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './header.module.css'
import img from './W.gif'
export default function Header() {
    
    return (
        <div className={s.wraper}>
            <nav>
            <NavLink className={s.link} to='/search'>Search</NavLink>
            <NavLink className={s.link} to='/all'>text</NavLink>
            <img src={img} alt='#'/>
            <NavLink className={s.link} to='/other'>text</NavLink>
            <NavLink className={s.link} to='blabla'>text</NavLink>
            </nav>
        </div>
    )
}
