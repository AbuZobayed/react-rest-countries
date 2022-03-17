import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCounties] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCounties(data));
    },[])


    return (
        <div>
            <h1>Hello from Countries:{countries.length}</h1>
            {/* {
                countries.map(country => console.log(country))
            } */}


            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;