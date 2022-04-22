import React from 'react'
import './FullDashboard.css'
import DriversContainer from '../Cards/DriversContainer'

const FullDashboard = ({allDrivers, updateFavorites}) => {
	return (
    <div className='all-favorites'>
      <div className ='favorite-drivers'>Your Favorite Drivers: 
      <DriversContainer allDrivers={allDrivers} updateFavorites={updateFavorites}/>
      </div>
      <div className = 'favorite-constructors'> Fave teams go here</div>
    </div>
	)
}
export default FullDashboard
