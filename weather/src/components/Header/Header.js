import React from 'react';
import './Header.css'
const Header = () => (
    <div className="header">
        <h1>React Weather App</h1>
        <div className="inputs">
            <label for="city">City:</label>
            <input type="text" name="city" placeholder="Enter City"></input>
            <button type="submit">Submit</button>
        </div>
    </div>
);
export default Header;