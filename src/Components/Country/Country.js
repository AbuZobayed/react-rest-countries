import React from 'react';
import "./Country.css"

const Country = (props) => {
    console.log(props);
    const {area,region,population,name} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <p>Population: {population}</p>
            <p><small> Region :{region}</small></p>
            <p><small>Area: {area}</small></p>
        </div>
    );
};

export default Country;