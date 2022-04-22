import React from 'react'
import './FullDashboard.css'
import DriversContainer from '../Cards/DriversContainer'

const FullDashboard = ({allDrivers, updateFavoriteDriver}) => {
	return (
    <div className='all-favorites'>
      <div className ='favorite-drivers'>Your Favorite Drivers:
      <DriversContainer allDrivers={allDrivers} updateFavoriteDriver={updateFavoriteDriver}/>
      </div>
      <div className = 'favorite-constructors'> Fave teams go here</div>
    </div>
	)
}
export default FullDashboard
