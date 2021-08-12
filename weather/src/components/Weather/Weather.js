import React from 'react';
import './Weather.css';
import Image from '../Image/Image';
const Weather = ({city, weather, icon}) => {
    return (
        <div className="weather">
            <h1>{city}</h1>
            <Image icon={icon}/>
            <h2>{weather}</h2>
        </div>
    );
}
export default Weather;
/* <Image weather={weather}/> */
