import './App.css';
import Header from './components/Header/Header';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  //create a state for weather and set state
  const[weather,setWeather] = useState([]);
  //create async func to get the api
  const getApi = async () => {
    //try first
    try{
      //use axios to grab data
      const data = await axios.get('http://api.openweathermap.org/data/2.5/weather?q=boston&appid=248f8e0c9068fd287bbbac0b4562cabf');
      //print to the console
      console.log(data);
    } catch (e) {
      //if api fails console log error
      console.log(e);
    }
  }
  //when this component first loads we need to use useEffect
  useEffect(() => {
    //call function to get api
    getApi();
  },[]);
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
