import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const SingleProduct = (props)=>{

	const params = useParams();
	const navigate = useNavigate()

	return <>
	<h1>Product id coming via url: {params.product}</h1>
	<p onClick={() => navigate("/")}>Go home</p>
	</>
}


export default SingleProduct