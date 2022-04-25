import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
	return (
		<nav className='navigation'>
			<div className='title-div'>
			<img className='nav-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/F1.svg/2560px-F1.svg.png' alt='logo' width='200px'/>
			</div>
			<div className='nav-buttons'>
				<NavLink to='/'>
					<p className='nav-button home-link'>Home</p>
				</NavLink>
				<NavLink to='/dashboard'>
					<p className='nav-button dashboard-link'>Dashboard</p>
				</NavLink>
				<NavLink to='/allDrivers'>
					<p className='nav-button drivers-link'>Drivers</p>
				</NavLink>
				<NavLink to='/allConstructors'>
					<p className='nav-button constructors-link'>Constructors</p>
				</NavLink>
        <NavLink to='/fun'>
          <p className='nav-button fun-link'>Fun</p>
        </NavLink>
			</div>
		</nav>
	)
}

export default Nav
