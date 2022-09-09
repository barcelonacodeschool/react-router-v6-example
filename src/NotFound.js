import React from 'react'
import { useNavigate } from "react-router-dom";


export default function NotFound() {
	const navigate = useNavigate();
	setTimeout(() => { navigate('/') }, 5000)
	return (
		<div>
			<h1>404, page not found...</h1>
		</div>
	)
}