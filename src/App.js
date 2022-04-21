import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import getData from './apiCalls'

function App() {
  const [drivers, setDrivers] = useState([])
  const [constructors, setConstructors] = useState([])
  const[error, setError] = useState('')

  useEffect(() => {
    getData('constructors')
    .then(data => setConstructors(data.constructors))
    .catch(error => setError(error.message))
    getData('drivers')
    .then(data => setDrivers(data.drivers))
    .catch(error => setError(error.message))
  }, [])

  return (
    <div className='App'>
      <h1>F1 TAKES VEGAS!!!</h1>
      { error && error }
    </div>
  )
}
export default App
