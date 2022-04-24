import React from 'react'
import './FullDashboard.css'
import DriversContainer from '../Cards/DriversContainer'
import ConstructorContainer from '../Cards/ConstructorContainer'

const FullDashboard = ({allDrivers, updateFavoriteDriver, allConstructors, updateFavoriteTeam}) => {
	return (
    <div className='all-favorites'>
      <div className ='favorite-drivers'>Your Favorite Drivers:
      <DriversContainer allDrivers={allDrivers} updateFavoriteDriver={updateFavoriteDriver}/>
      </div>
      <div className = 'favorite-constructors'> Your Favorite Constructors:
			<ConstructorContainer allConstructors={allConstructors} updateFavoriteTeam={updateFavoriteTeam} />
			</div>
    </div>
	)
}
export default FullDashboard
