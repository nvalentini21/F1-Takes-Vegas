import React from 'react';
import './ConstructorCard.css'
import blueHeart from '../../images/heartblue.png'
import colorHeart from '../../images/heart-color.png'

const ConstructorCard = ({team, id, updateFavoriteTeam}) => {
  return (
    <div className='constructor-card'>
      <div className='title-emblem'>
        <img src={team.icon} alt="team emblem" width="57px"/>
        <p className='team-name'>{team.name}</p>
      </div>
      <div className= 'team-info'>
        <img className ='team-car' src={team.car_img} alt="team emblem" width="300px"/>
        <p className= 'full-name'>Full Name: {team.full_name}</p>
        <p className= 'team-base'>Base: {team.base}</p>
        <p className= 'team-entry'>Entry Year: {team.entry_year}</p>
        <p className= 'world_championships'>World Championships: {team.world_championships}</p>
        <p className= 'team-rank'>2022 Rank: {team.rank}</p>
        <p className= 'team-drivers'>2022 Drivers: {team.driver1}, {team.driver2}</p>


      </div>
      <div className='like-icon-con'>
        {!team.isFavorited && <img src={blueHeart} className='like-icon-con blue-heart' id={team.id} alt="car" width="57px" onClick={(event)=> updateFavoriteTeam(event)}/>}
        {team.isFavorited && <img src={colorHeart} className='like-icon-con color-heart' id={team.id} alt="car" width="48px" onClick={(event)=> updateFavoriteTeam(event)}/>}
      </div>
    </div>
  )
}

export default ConstructorCard
