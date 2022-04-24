import React from 'react'
import './FullDashboard.css'
import DriversContainer from '../Cards/DriversContainer'
import ConstructorContainer from '../Cards/ConstructorContainer'

const FullDashboard = ({allDrivers, updateFavoriteDriver, allConstructors, updateFavoriteTeam}) => {
	return (
    <div className='all-favorites'>
      <div className ='favorite-drivers'>
				<p className='title-favorites'> Your Favorite Drivers:</p>
      	<DriversContainer allDrivers={allDrivers} updateFavoriteDriver={updateFavoriteDriver}/>
      </div>
      <div className = 'favorite-constructors'>
			<p className='title-favorites'> Your Favorite Constructors:</p>
				<ConstructorContainer allConstructors={allConstructors} updateFavoriteTeam={updateFavoriteTeam} />
			</div>
    </div>
	)
}
export default FullDashboard
