import api from "../API/api"
const setApiStatus='setApiStatus'
const setSearch ='setSearch'
const setSewatherData='setSewatherData'
let initiallState = {
    searchRef:'',
    weatherData:null,
    apiStatus:false
}
let weatherReducer = (state=initiallState,action)=>{
    switch (action.type){
        case setSearch:
            return {
                ...state,
                searchRef:action.text
            }
            case setSewatherData:
                
                return {
                    ...state,
                    weatherData:action.data,
                    
                }
                case setApiStatus:{
                    return {
                        ...state,
                        apiStatus:action.bool
                    }
                }
            default :
            return state
    }
}
 export const setSearchAC=(text)=>({type:setSearch,text})
 const setSewatherDataAC=(data)=>({type:setSewatherData,data})
 const setApiStatusAC=(bool)=>({type:setApiStatus,bool})
 export const setSewatherData_Thunk=(text)=>{
     return (dispatch)=>{
        dispatch(setApiStatusAC(false))
         api.getWeather(text).then(res=>{
             dispatch(setSewatherDataAC(res.data))
             dispatch(setApiStatusAC(true))
         }).catch((error)=>{
             if(error){
                 alert('Ошибка!!!вы ввели не коректный город.Ввод только en')
             }
         })
     }
 }
 export default weatherReducer