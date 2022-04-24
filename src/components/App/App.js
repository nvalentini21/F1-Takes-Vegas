import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import getData from '../../apiCalls'
import Nav from '../Nav/Nav'
import DriversContainer from '../Cards/DriversContainer'
import ConstructorContainer from '../Cards/ConstructorContainer'
import FullDashboard from '../FullDashboard/FullDashboard'

const App = (event) => {
  const [drivers, setDrivers] = useState([])
  const [constructors, setConstructors] = useState([])
  const [favorites, setFavorites] = useState([])
  const [favoriteTeam, setFavoriteTeam] = useState([])
  const[error, setError] = useState('')

  useEffect(() => {
    getData('constructors')
    .then(data => {
      const newArray = data.constructors.map(constructor =>{
        constructor.isFavorited = false
        constructor.key = constructor.id
        return constructor
      })
      setConstructors(newArray)
    })
    .catch(error => setError(error.message))
  }, [])

  useEffect(() => {
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


  const updateFavoriteDriver = (event) => {
    const updatedArray = drivers.map((driver) => {
			if (parseInt(event.target.id) === driver.id && !driver.isFavorited) {
				driver.isFavorited = true
        setFavorites([...favorites, driver])
			} else if (parseInt(event.target.id) === driver.id && driver.isFavorited) {
				driver.isFavorited = false
        const filteredFavorites = favorites.filter(favorite => favorite.id != driver.id)
				setFavorites(filteredFavorites)
			}
			return driver
		})
  }

  const updateFavoriteTeam = (event) => {
    const updatedArray = constructors.map((constructor) => {
      if (parseInt(event.target.id) === constructor.id && !constructor.isFavorited) {
        constructor.isFavorited = true
        setFavoriteTeam([...favoriteTeam, constructor])
      } else if (parseInt(event.target.id) === constructor.id && constructor.isFavorited) {
        constructor.isFavorited = false
        const filteredFavorites = favorites.filter(favorite => favorite.id != constructor.id)
        setFavoriteTeam(filteredFavorites)
      }
      return constructor
    })
  }


  return (
    <main className='App'>
      <Nav />
      { error && error }
      <Switch>
        <Route exact path="/"
        render={() => <div> This is the home page </div>}
        />
        <Route path="/dashboard"
          render={() => <FullDashboard allDrivers={favorites} allConstructors={favoriteTeam} updateFavoriteDriver={updateFavoriteDriver} updateFavoriteTeam={updateFavoriteTeam} />}
        />
        <Route path="/allDrivers"
          render={() => <DriversContainer allDrivers={ drivers } updateFavoriteDriver={updateFavoriteDriver}/>}
        />
        <Route path="/allConstructors"
          render={() => <ConstructorContainer allConstructors={ constructors } updateFavoriteTeam={updateFavoriteTeam}/>}
        />
        <Route path="/fun"
          render={() => <div>This is the fun page </div>}
        />
      </Switch>
    </main>
  )
}
export default App
