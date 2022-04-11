import React from 'react'
import s from './loader.module.css'
import img from './l.gif'
function Loader() {
    return (
        <div className={s.wraper}>
            <img src={img} />
        </div>
    )
}
export default Loader