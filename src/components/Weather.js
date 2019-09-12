import React from 'react';

const Weather = props => (
    //only returning one element --> can just explicitly return (don't need return statment)
    <div>
        {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}                
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Conditiions: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
    </div>
);

export default Weather;