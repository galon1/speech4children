import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import '../css/Header.css'
import {Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class Header extends React.Component {
    
    render() {
        return (
            <>
            <div className="menu-container">
            <Link to="/" className="link"> <h2 className="logo-title">Speech4Children</h2></Link>
            <div className="margin"></div>
            <a href="./" className="menu-item">HOME</a>
            <a href="./about" className="menu-item">ABOUT</a>
            <a href="./testimonial" className="menu-item">TESTIMONIALS</a>
            <a href="./facility" className="menu-item">FACILITY</a>
            <Button className="contact-button" onClick={() => { window.open("./contact", "_self")}}>CONTACT</Button>
            </div>
            </>
        )
    }
}

export default Header

