import React, { Component } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Weather from "../weather/Weather";
import s from './search.module.css'
class search extends Component {
  state = {
    search: this.props.searchRef,
  };
  onChange = (e) => {
    this.setState({
      search: e.currentTarget.value,
    });
  };
  
  render() {
    
    return (
      <div className={s.wraperSearch}>
        <div className={s.search}>
             <input onChange={this.onChange} value={this.state.search} placeholder='enter the city in English'/>
        <button
          onClick={() => this.props.setSewatherData_Thunk(this.state.search)}
        >
          <NavLink to={`/search/${this.state.search}`}>Search</NavLink>
        </button> 
        </div>
       
        <Routes>
          <Route
            path={`/${this.state.search}`}
            element={
                this.props.weatherData?
              <Weather
                apiStatus={this.props.apiStatus}
                name={this.props.weatherData.name}
                id={this.props.weatherData.weather[0].icon}
                temp={this.props.weatherData.main.temp}
                description={this.props.weatherData.weather[0].description}
              />:<div></div>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default search;
