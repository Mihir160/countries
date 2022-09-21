import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const {name, flags, area, region} = props.country
    return (
        <div className='country'>
            <img src={flags.png} alt="" srcset="" />
            <h1>Country Name: {name.common}</h1>
            <p>Area :{area}</p>
            <p><small>Region: {region}</small></p>
        {/* <img src={props.flag} alt="" srcset="" />
          <h3>Name: {props.name}</h3>
          <p>Population: {props.polpulation}</p> 
          <p><small>Region: {props.region}</small></p>
          <p>Area: {props.area}</p>  */}

        </div>
    );
};

export default Country;