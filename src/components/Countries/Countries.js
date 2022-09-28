import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css";

const Countries = () => {
    // 1st step
    const [countries, setCountries] = useState([]);

    // 2nd step
    useEffect(() => {


        // 3rd step
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // 4th step 
            .then(data => setCountries(data));




    }, [])

    return (
        // 5 step
        <div>
            <h2>Hello From All Countries: {countries.length}</h2>

            <div className='countries-container'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;