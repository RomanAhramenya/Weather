import React, { Component } from 'react'
import { compose } from 'redux'
import Search from './Search'
import {setSearchAC,setSewatherData_Thunk} from './../../redux/weatherReducer'
import { connect } from 'react-redux'
 class SearchW extends Component {
    render() {
        return <Search {...this.props}/>
    }
}
let mapStateToProps=(state)=>({
    searchRef:state.weather.searchRef,
    weatherData:state.weather.weatherData,
    apiStatus:state.weather.apiStatus
})
export default compose(connect(mapStateToProps,{setSearchAC,setSewatherData_Thunk}) )(SearchW)