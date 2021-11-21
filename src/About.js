import React from 'react'
import {useLocation,useNavigate} from 'react-router-dom'

const About = (props)=>{

	// to get location from the url
	let location = useLocation();
	console.log(location)

	let navigate = useNavigate();

	return <div>
	<h1>About us page / component (c) {props.year}</h1>
	<p onClick={()=>navigate(-1)}>go back</p>
	<p onClick={()=>navigate('/')}>Go home</p>
	</div>
}


export default About