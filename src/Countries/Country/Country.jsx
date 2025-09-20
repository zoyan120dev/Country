import React, { useState } from "react";
import './country.css'

function Country({ country,  handelVisitedCountries ,  hanDelvisitedFlag }) {

  const [visited, setVisited] = useState(false);

  console.log(country.area.area);

  
  const handelVisited = () => {
     handelVisitedCountries(country)
    setVisited(visited ? false : true)
  }
  return (
    <>
      <div className={`country ${visited && 'countryVisited'}`}>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <h1>Name:{country.name.common}</h1>
        <p>Population: {country.population.population}</p>
        <p>Area: {country.area.area} {country.area.area > 300000  ? 'Big Country' : 'Small Country'}</p>
        <div className="flexContainer">
             <button className="button" onClick={handelVisited}>
            {
                visited ? 'Visited' : 'not Visited'
            }
         </button>
         <button className="button" onClick={() => {hanDelvisitedFlag(country.flags.flags.png)}}>
            Visited Flag
         </button>
        </div>
         
      </div>
    </>
  );
}

export default Country;
