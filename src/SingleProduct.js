import React from 'react'
import {useParams} from 'react-router-dom'

const SingleProduct = (props)=>{

	let params = useParams();

	return <h1>Product id coming via url: {params.product}</h1>
}


export default SingleProduct