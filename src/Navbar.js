import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props)=>{
	return <div className='navbar'>

	<NavLink  
	to={'/'}
	style={ ({isActive}) => (
		isActive ? styles.activeLink : styles.defaultLink
	)}
	>Home page
	</NavLink>

	<NavLink  
	to={'/about'}
	style={ ({isActive}) => (
		isActive ? styles.activeLink : styles.defaultLink
	)}
	>About us
	</NavLink>

	<NavLink  
	to={'/contact'}
	style={ ({isActive}) => (
		isActive ? styles.activeLink : styles.defaultLink
	)}
	>Contact page
	</NavLink>

	</div>
}

let styles = {
	activeLink: {
		color:'orange'
	},
	defaultLink: {
		color:'green'
	}
}


export default Navbar