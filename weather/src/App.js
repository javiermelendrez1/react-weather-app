import './App.css';
import Header from './components/Header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  //create a state for weather and set state
  const[weather,setWeather] = useState('');
  //create a state for city 
  const[city,setCity] = useState('');
  //create async func to get the api
  const getApi = async () => {
    //try first
    try{
      //use axios to grab data
      const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=248f8e0c9068fd287bbbac0b4562cabf`);
      //print to the console
      console.log(Math.ceil(data.data.main.temp));
      //use setWeather to set the weather
      // setWeather(Math.ceil(data.data.main.temp));
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
      <Header setCity={setCity}/>
    </div>
  );
}

export default App;
