import React from 'react'
import DriverCard from './DriverCard'
import './CardContainer.css'

const DriversContainer = ({allDrivers, updateFavoriteDriver}) => {
  const driverCards = allDrivers.map(driver => {
    return (
      <DriverCard driver={driver} id={driver.id} key= {driver.id} updateFavoriteDriver={updateFavoriteDriver} />
    )
  })

  return (
    <div>
      {!allDrivers.length && <div className='no-favorites-tag'>You currently do not have any favorites! Like your drivers to save them.</div>}
      {allDrivers && <div className ="card-container">{driverCards}</div>}
    </div>
  )
}

export default DriversContainer
