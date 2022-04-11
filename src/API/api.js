import axios from "axios";
const apiKey='d2057d7e5aa20f3821abb86f63150a75'
const instance = axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5/',
    
   
})
const api = {
    getWeather:(city)=>{
     return   instance.get(`weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`).then(res=>{
         return res
     })
    },
    history:(id)=>{
        instance.get(`assets/${id}/history?interval=m1`).then(res=>{
           return res.data.data
        })
    }
}

export default api
