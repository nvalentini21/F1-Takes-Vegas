import './App.css';
import React, { useState, useEffect } from 'react'
import getData from '../../apiCalls'
import Nav from '../Nav/Nav'

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
    <main className='App'>
      <Nav />
      { error && error }
    </main>
  )
}
export default App
