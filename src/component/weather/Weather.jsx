import React from 'react'
import s from './weather.module.css'
import Loader from './../../common/loader/Loader'
 function Weather(props) {
    return (
        <>  {props.apiStatus?
         <div className={s.wraper}>
            <div className={s.name}>{props.name}</div>
            <div className={s.img}><img src={`http://openweathermap.org/img/wn/${props.id}@2x.png`}/></div>
            <div className={s.temp}>{Math.round(props.temp) }&#8451;</div>
            <div className={s.description}>{props.description}</div>
        </div>:<Loader/>}
        </>
      
       
    )
}
export default Weather