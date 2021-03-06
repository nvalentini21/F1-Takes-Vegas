import React from 'react';
import './DriverCard.css'
import blueHeart from '../../images/heartblue.png'
import colorHeart from '../../images/heart-color.png'
import PropTypes from 'prop-types'

const DriverCard = ({driver, updateFavoriteDriver}) => {
  return (
    <div className='driver-card'>
      <div className='image-div'>
        <p className='driver-name'>{driver.name}</p>
        <img className='driver-url' src={driver.profile_img} alt="Driver" width="200px"/>
      </div>
      <div className='stats-div'>
        <p className='driver-team'>Team: {driver.team}</p>
        <p className='driver-dob'>DOB: {driver.dob}</p>
        <div className = 'nationality-div'>
          <p className= 'driver-nationality'>Nationality: {driver.nationality}</p>
          <img src={driver.flag_img} alt="Flag" width="100px"/>
        </div>
        <p className='driver-rank'> 2022 Rank: {driver.rank_2022}</p>
      </div>
      <div className='like-icon'>
        {!driver.isFavorited && <img src={blueHeart} className='like-icon blue-heart' id={driver.id} alt="Driver" width="57px" onClick={(event)=> updateFavoriteDriver(event)}/>}
        {driver.isFavorited && <img src={colorHeart} className='like-icon color-heart' id={driver.id} alt="Driver" width="48px" onClick={(event)=> updateFavoriteDriver(event)}/>}
      </div>
    </div>
  )
}

DriverCard.propTypes = {
  driver: PropTypes.bool,
  updateFavoriteDriver: PropTypes.func
}

export default DriverCard
