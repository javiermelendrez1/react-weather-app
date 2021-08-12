import './App.css';
import Header from './components/Header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Weather from './components/Weather/Weather'
function App() {
  //create a state for weather and set state
  const[weather,setWeather] = useState('');
  //create a state for city 
  const[city,setCity] = useState('');
  //state for icon image
  const[icon, setIcon] = useState('');
    //create async func to get the api

  const getApi = async () => {
    //try first
    try{
      //use axios to grab data
      const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=248f8e0c9068fd287bbbac0b4562cabf`);
      //print to the console
      console.log(Math.ceil(data.data.main.temp));
      console.log(data.data.weather["0"].icon);
      //set icon 
      setIcon(data.data.weather["0"].icon);
      //use setWeather to set the weather
      setWeather(Math.ceil(data.data.main.temp));
      // setCity(city);
    } catch (e) {
      //if api fails console log error
      console.log(e);
    }
  }
  //when this component first loads we need to use useEffect
  useEffect(() => {
    //call function to get api
    getApi();
  },[city]); //we pass city as a dependent variable because when we will keep changing the city to see different variables
  return (
    <div className="App">
      {
        city === '' ?  (<Header setCity={setCity}/>) : (<Weather weather={weather} city={city} icon={icon}/>)  
      }
    </div>
  );
}

export default App;
