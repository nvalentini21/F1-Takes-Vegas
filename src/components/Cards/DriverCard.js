import React from 'react';
import './DriverCard.css'
import blueHeart from '../../images/heartblue.png'
import colorHeart from '../../images/heart-color.png'

const DriverCard = ({driver, updateFavorites}) => {
  return (
    <div className='driver-card'>
      <div className='image-div'>
        <p className='driver-name'>{driver.name}</p>
        <img src={driver.profile_img} alt="Driver photo" width="200px"/>
      </div>
      <div className='stats-div'>
        <p className='driver-team'>Team: {driver.team}</p>
        <p className='driver-dob'>DOB: {driver.dob}</p>
        <div className = 'nationality-div'>
          <p className= 'driver-nationality'>Nationality: {driver.nationality}</p>
          <img src={driver.flag_img} alt="Driver photo" width="100px"/>
        </div>
        <p className='driver-rank'> 2022 Rank: {driver.rank_2022}</p>
      </div>
      <div className='like-icon'>
        {!driver.isFavorited && <img src={blueHeart} id={driver.id} alt="Driver photo" width="57px" onClick={(event)=> updateFavorites(event)}/>}
        {driver.isFavorited && <img src={colorHeart} id={driver.id} alt="Driver photo" width="48px" onClick={(event)=> updateFavorites(event)}/>}
      </div>
    </div>
  )
}

export default DriverCard
