import React from "react";
import {BsFillSunFill, BsCloudSunFill, BsFillCloudRainHeavyFill, BsFillCloudsFill, BsDropletFill, BsArrowUpSquareFill, BsFillArrowDownSquareFill} from "react-icons/bs"
import {MdOutlineAir} from "react-icons/md"

export default function CurrentWeather({ cityData }) {

    const { main } = cityData
    const { weather } = cityData
    const weatherDescription = weather ? weather[0].description : ""


    const styleTemp = {
        fontSize: "5em",
        marginTop: '0.5em'
    }

    return (
        <div className="currentweather-container">
            <div className="weather-container">
                <h1 style={{color: "#8c8cac"}}>Current Weather</h1>
                <h2>{cityData.name}</h2>
                <h1>{weatherDescription === 'clear sky' ? <BsFillSunFill style={{fontSize: "3em", color:"#F0E68C"}}/> 
                : weatherDescription === 'mist' ? <BsCloudSunFill style={{fontSize: "3em", color: "gray"}}/> : 
                weatherDescription === 'rain' ? <BsFillCloudRainHeavyFill style={{fontSize: "3em",  color:"gray"}}/> : 
                weatherDescription === 'overcast clouds' ? <BsFillCloudsFill style={{fontSize: "3em",  color:"gray"}}/>: 
                weatherDescription === 'scattered clouds' ? <BsFillCloudsFill style={{fontSize: "3em",  color:"gray"}}/>:
                weatherDescription === 'broken clouds' ? <BsFillCloudsFill style={{fontSize: "3em", color:"gray"}}/>:
                weatherDescription === 'light rain' ? <BsFillCloudRainHeavyFill style={{fontSize: "3em",  color:"gray"}}/>:""}</h1>
                <span>{weatherDescription}</span>
                <span style={styleTemp}>{main ? `${Math.round(main.temp-273.15)} °C` : ""}</span>
            </div>
            <div className="mainData-container">
                <label>Feels like {main ? `${Math.round(main.feels_like-273.15)} °C` : ""}</label>
                
                <label><BsDropletFill style={{color:'blue'}}/>  Humidity: {main ? main.humidity + " %" : ""}</label>
                
                <label><MdOutlineAir/>  Pressure {main ? main.pressure + " hPa" : ""}</label>
                
                <label><BsArrowUpSquareFill style={{color:'aquamarine'}}/>  Max Temperature {main ? `${Math.round(main.temp_max-273.15)} °C` : ""}</label>
                
                <label><BsFillArrowDownSquareFill style={{color:'aquamarine'}}/>  Min Temperature  {main ? `${Math.round(main.temp_min-273.15)} °C` : ""}</label>
            
            </div>
        </div>

    )
}