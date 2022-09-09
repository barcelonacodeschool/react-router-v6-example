import React, {useState} from 'react';
import './App.css';
import Home from './Home'
import About from './About'
import Contacts from './Contacts'
import Navbar from './Navbar'
import Footer from './Footer'
import SingleProduct from './SingleProduct'
import NotFound from './NotFound'

import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'

export default function App() {

  const [isLoggedIn]=useState(false)

  return (

    <div className='App'>
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About year={2020} />} />
    <Route path='/contact' element ={ !isLoggedIn ? <Navigate to='/' /> : <Contacts/> } />
    <Route path='/singleproduct/:product' element={<SingleProduct/>} />
    <Route path="*" element={<NotFound />} />
    </Routes>
    </Router>

    <Footer />
    </div>

    )
}

