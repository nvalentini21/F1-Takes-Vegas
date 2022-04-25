import React from 'react'
import DriverCard from './DriverCard'
import './CardContainer.css'
import PropTypes from 'prop-types'

const DriversContainer = ({allDrivers, updateFavoriteDriver}) => {
  const driverCards = allDrivers.map(driver => {
    return (
      <DriverCard driver={driver} id={driver.id} key= {driver.id} updateFavoriteDriver={updateFavoriteDriver} />
    )
  })

  return (
    <div>
      {!allDrivers.length && <div className='no-favorites-tag no-favorites-tag-driver'>You currently do not have any favorites.</div>}
      {allDrivers && <div className ="card-container">{driverCards}</div>}
    </div>
  )
}

DriversContainer.propTypes = {
  allDrivers: PropTypes.array,
  updateFavoriteDriver: PropTypes.func
}

export default DriversContainer
