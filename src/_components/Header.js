import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import '../css/Header.css'
import { Link } from 'react-router-dom';
import { Button, Dropdown } from 'semantic-ui-react';
import Responsive from 'react-responsive';

class Header extends React.Component {

    handleChange = (e, { name, value }) => window.open(`${value}`, "_self")

    render() {
        const Mobile = props => <Responsive {...props} maxWidth={1100} />;
        const menu = [
            {
                key: "HOME",
                text: "HOME",
                value: "./"
            },
            {
                key: "ABOUT",
                text: "ABOUT",
                value: "./about"
            },
            {
                key: "TESTIMONIALS",
                text: "TESTIMONIALS",
                value: "./testimonial"
            },
            {
                key: "Facility",
                text: "FACILITY",
                value: "./facility"
            },
            {
                key: "Contact",
                text: "CONTACT",
                value: "./contact"
            }
        ]
        return (
            <div className="wrapper">
                <nav className="desktop">
                    <div className="menu-container">
                    <Link to="/" className="link"> <h2 className="logo-title">Speech4Children</h2></Link>
                        <div className="margin"></div>
                        <a href="./" className="menu-item">HOME</a>
                        <a href="./about" className="menu-item">ABOUT</a>
                        <a href="./facility" className="menu-item">FACILITY</a>
                        <a href="./testimonial" className="menu-item">TESTIMONIALS</a>
                        <Button className="contact-button" onClick={() => { window.open("./contact", "_self") }}>CONTACT</Button>
                    </div>
                </nav>
                <Mobile>
                    <nav>
                    <div className="menu-container">
                    <Link to="/" className="link"> <h2 className="logo-title">Speech4Children</h2></Link>
                        <Dropdown
                        className="dropdown-button"
                        icon='align justify'
                        button
                            options={menu}
                            onChange={this.handleChange}>
                        </Dropdown>
                        </div>
                    </nav>
                </Mobile>
            </div>
        )
    }
}

export default Header

