import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countries from './Countries/Countries'

const countryPromise = fetch('https://openapi.programming-hero.com/api/all')
.then(res => res.json())

function App() {
  return (
    <>
       <Suspense fallback='Please Wating....'>
           <Countries countryPromise={countryPromise}/>
       </Suspense>
    </>
  )
}

export default App
