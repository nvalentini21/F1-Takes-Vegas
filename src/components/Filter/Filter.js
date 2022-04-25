import React, { useState, useEffect } from 'react'
import './Filter.css'
import getData from '../../apiCalls'


const Filter = () => {
  const [input, setInput] = useState('')
  const [drinks, setDrinks] = useState([])
  const [driverDrink, setDriverDrink] = useState([])
  const[error, setError] = useState('')

  useEffect(() => {
    getData('drinks')
    .then(data => {
      setDrinks(data.drinks)
    })
    .catch(error => setError(error.message))
  }, [])

  const handleChange = (event) => {
    const value = event.target.value
    setInput(value)
    const driverDrink = drinks.find(drink => value === drink.name)
    console.log(driverDrink)
    setDriverDrink(driverDrink)
  }

  return(
    <div className='filter-bar'>
      {error && <div>Unable to get information.</div>}
      <p className='intro-tag'>What drink is most like their drivers? Select a driver to find out!</p>
      <select className='select-bar' id="selectBar" onChange={event => handleChange(event)}>
      <option value=''>Chose your driver:</option>
      <option value="Alexander Albon">Alexander Albon</option>
      <option value="Fernando Alonso">Fernando Alonso</option>
      <option value="Valtteri Botas">Valtteri Botas</option>
      <option value="Pierre Gasly">Pierre Gasly</option>
      <option value="Lewis Hamilton">Lewis Hamilton</option>
      <option value="Nico Hulkenberg">Nico Hulkenberg</option>
      <option value="Kevin Magnussen">Kevin Magnussen</option>
      <option value="Lando Norris">Lando Norris</option>
      <option value="Esteban Ocon">Esteban Ocon</option>
      <option value="Sergio Perez">Sergio Perez</option>
      <option value="Daniel Ricciardo">Daniel Ricciardo</option>
      <option value="George Russel">George Russel</option>
      <option value="Carlos Sainz">Carlos Sainz</option>
      <option value="Mick Schumacher">Mick Schumacher</option>
      <option value="Lance Stroll">Lance Stroll</option>
      <option value="Yuki Tsunoda">Yuki Tsunoda</option>
      <option value="Max Verstappen">Max Verstappen</option>
      <option value="Guanyu Zhou">Guanyu Zhou</option>
      <option value="Sebastian Vettel">Sebastian Vettel</option>
      </select>
      {input ? <div className="drink-info">
        <p className= "drink-driver"> {driverDrink.name} is a: </p>
        <p className="drink-type">{driverDrink.drink_name}</p>
        <img className='drink-url' src={driverDrink.drink_photo} alt="drink" height='300px'></img>
      </div> : <div>No driver chosen.</div> }
    </div>
  )
}

export default Filter;
