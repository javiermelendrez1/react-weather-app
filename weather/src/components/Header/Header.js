import React, { useState } from 'react';
import './Header.css'
const Header = ({setCity}) => {
    //create a state for the input value
    const[input,setInput] = useState('');
    //this function will be called when the form is submitted
    const handleSubmit = (e) => {
        //prevent the page from refreshing 
        e.preventDefault();
        console.log(input);
        //set the city to the input value
        setCity(input);
        //reset the input value
        setInput('');
    }
    return (
    <div className="header">
        <h1>React Weather App</h1>
        <div className="inputs">
            <form onSubmit={handleSubmit}>
            <label htmlFor="city">City:</label>
            <input type="text" name="city" placeholder="Enter City" value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button type="submit" value="submit" >Submit</button>
            </form>

        </div>
    </div>
);
}
export default Header;