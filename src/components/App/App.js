import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import getData from '../../apiCalls'
import Nav from '../Nav/Nav'
import DriversContainer from '../Cards/DriversContainer'

const App = (event) => {
  const [drivers, setDrivers] = useState([])
  const [constructors, setConstructors] = useState([])
  const [hasFavorites, setHasFavorites] = useState(false)
  const [favorites, setFavorites] = useState([])
  const[error, setError] = useState('')

  useEffect(() => {
    getData('constructors')
    .then(data => setConstructors(data.constructors))
    .catch(error => setError(error.message))
    getData('drivers')
    .then(data => {
      const newArray = data.drivers.map(driver =>{
        driver.isFavorited = false
        driver.key = driver.id
        return driver
      })
      setDrivers(newArray)
    })
    .catch(error => setError(error.message))
  }, [])

  return (
    <main className='App'>
      <Nav />
      { error && error }
      <Switch>
        <Route exact path="/"
        render={() => <div> This is the home page </div>}
        />
        <Route path="/dashboard"
          render={() => <div>This is the user dashboard page</div>}
        />
        <Route path="/allDrivers"
          render={() => <DriversContainer allDrivers={ drivers }/>}
        />
        <Route path="/allConstructors"
          render={() => <div>This is the allConstructors Page</div>}
        />
        <Route path="/fun"
          render={() => <div>This is the fun page </div>}
        />
      </Switch>
    </main>
  )
}
export default App
