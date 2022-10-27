import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'



import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
//import Home from '../components/home/Home'
import Routes from './Routes'
import Footer from '../components/template/Footer'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
    <BrowserRouter>
        <div className="app">
            <Logo></Logo>
            <Nav></Nav>
            <Routes/>
            <Footer></Footer>
        </div>
    </BrowserRouter>
    