import React from 'react';
import './DriverCard.css'
import blueHeart from '../../images/heartblue.png'
import colorHeart from '../../images/heart-color.png'

const ConstructorCard = ({team, id, key, updateFavoriteTeam}) => {
  return (
    <div className='driver-card'>
      <div className='like-icon'>
        {!constructor.isFavorited && <img src={blueHeart} className='like-icon' id={team.id} alt="car photo" width="57px" onClick={(event)=> updateFavoriteTeam(event)}/>}
        {constructor.isFavorited && <img src={colorHeart} className='like-icon' id={team.id} alt="car photo" width="48px" onClick={(event)=> updateFavoriteTeam(event)}/>}
      </div>
    </div>
  )
}

export default ConstructorCard
