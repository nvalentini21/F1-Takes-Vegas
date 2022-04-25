import React from 'react'
import './Welcome.css'

const Welcome = () => {
	return (
		<div className='vegas-welcome'>
      <p></p>
      <h1 className='title'>Welcome to F1 takes Vegas! Your 2022 quick guide to all teams and drivers.</h1>
      <p className='instructions'> Click the links above to view all F1 drivers and teams, like your favorites, and get some fun drink recommendations!</p>
      <img className='vegas' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Las_Vegas_%28Nevada%2C_USA%29%2C_The_Strip_--_2012_--_6232.jpg/1920px-Las_Vegas_%28Nevada%2C_USA%29%2C_The_Strip_--_2012_--_6232.jpg'
          alt='Vegas'
          width='600px'
      />
      <p className='question'>F1 Last Vegas Circuit: Coming November 2023. Are you ready?</p>
		</div>
	)
}

export default Welcome
