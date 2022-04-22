import React from 'react'
import DriverCard from './DriverCard'
import './CardContainer.css'

const DriversContainer = ({allDrivers}, event) => {
  const driverCards = allDrivers.map(driver => {
    return (
      <DriverCard driver={driver} id={driver.id} key= {driver.id} />
    )
  })

  return (
    <div className ="card-container">
      {driverCards}
    </div>
  )
}

export default DriversContainer
