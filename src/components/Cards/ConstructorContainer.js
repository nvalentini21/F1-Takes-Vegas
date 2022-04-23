import React from 'react'
import ConstructorCard from './ConstructorCard'
import './CardContainer.css'

const ConstructorContainer = ({allConstructors, updateFavorites}) => {
  const constructorCards = allConstructors.map(team => {
    return (
      <ConstructorCard team={team} id={team.id} key= {team.id} updateFavorites={updateFavorites} />
    )
  })

  return (
    <div>
      {!allConstructors.length && <div className='no-favorites-tag'>You currently do not have any favorites! Like to save.</div>}
      {allConstructors && <div className ="card-container">{constructorCards}</div>}
    </div>
  )
}

export default ConstructorContainer
