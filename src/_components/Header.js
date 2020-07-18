import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import '../css/Header.css'
import {Link } from 'react-router-dom';

class Header extends React.Component {
    
    render() {
        return (
            <div className="grey-background">
\            <Link to="/">
            <h2 className="title">Speech4Children</h2></Link>
            <div className="menu-container">
            <a href="./about" className="menu-item">ABOUT</a>
            <a href="./testimonial" className="menu-item">TESTIMONIALS</a>
            <a href="./facility" className="menu-item">FACILITY</a>
            <a href="./services" className="menu-item">SERVICES</a>
            <a href="./#contact" className="menu-item">CONTACT</a>
            </div>
            </div>
        )
    }
}

export default Header

