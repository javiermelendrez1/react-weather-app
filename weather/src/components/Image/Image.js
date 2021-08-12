import React from 'react';

const Image = ({icon}) => {
    let w = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
        <img src={w} alt=''/>
    );
}
export default Image;