import React, { use, useState } from 'react'
import Country from './Country/Country';
import './Country/countris.css'

function Countries({countryPromise}) {
  const [visitedCountries , setVisitedCountries] = useState([]);
  const [visiedFlags, setVisitedFlags] = useState([])


  const hanDelvisitedFlag = (flag) => {
        const newVisitedFlag = [...visiedFlags , flag]
        setVisitedFlags(newVisitedFlag)
  }


  const handelVisitedCountries = (country) => {
    console.log('handle visied country cliked', country)
    const newVisitedcounntry = [...visitedCountries, country]
    setVisitedCountries(newVisitedcounntry) 
  }

  const countriesData = use(countryPromise);
 const countries = countriesData.countries;

  return (
   <>
     <h1>In The Countries : {countries.length}</h1>
     <h2>Total Country Visited: {visitedCountries.length}</h2>
     <h2>TOtal Flag visited: {visiedFlags.length}</h2>
     <ol>
        {
            visitedCountries.map(countrys => <li>{countrys.name.common}</li> )
        }
     </ol>
      <div className='visited_flag_container'>
         {
        visiedFlags.map((flag  , index)=> <img key={index} src={flag} alt=""/>)
        }
      </div>
     {
       <div className='countries'>
        {
             countries.map(country => <Country key={country.cca3}  country={country} handelVisitedCountries={handelVisitedCountries} hanDelvisitedFlag={hanDelvisitedFlag}/>)
        }
       </div>
     }
   </>
  )
}

export default Countries;