import React from 'react'
import './FullDashboard.css'
import DriversContainer from '../Cards/DriversContainer'
import ConstructorContainer from '../Cards/ConstructorContainer'
import PropTypes from 'prop-types'

const FullDashboard = ({allDrivers, updateFavoriteDriver, allConstructors, updateFavoriteTeam}) => {
	return (
    <div className='all-favorites'>
      <div className ='favorite-drivers'>
				<p className='title-favorites'> Your Favorite Drivers:</p>
      	<DriversContainer allDrivers={allDrivers} updateFavoriteDriver={updateFavoriteDriver}/>
      </div>
      <div className = 'favorite-constructors'>
			<p className='title-favorites title-favorites-constructor'> Your Favorite Constructors:</p>
				<ConstructorContainer allConstructors={allConstructors} updateFavoriteTeam={updateFavoriteTeam} />
			</div>
    </div>
	)
}

FullDashboard.propTypes = {
  allDrivers: PropTypes.array,
  updateFavoriteDriver: PropTypes.func,
	allConstructors: PropTypes.array,
	updateFavoriteTeam: PropTypes.func
}
export default FullDashboard
