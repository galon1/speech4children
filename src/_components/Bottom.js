import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import '../css/Bottom.css'

class Bottom extends React.Component {

    render() {
        return (
            <div className="black">
                <p className="speech4children">Speech4Children</p>
                <div className="menu-container">
                    <div className="margin"></div>
                    <a href="./about" className="bottom-item">ABOUT</a>
                    <a href="./testimonial" className="bottom-item">TESTIMONIALS</a>
                    <a href="./facility" className="bottom-item">FACILITY</a>
                </div>
                <p className="contact-us">CONTACT US: <br /> speech4children@gmail.com <br />44 Mechanic Street Suite 106-108 Newton Ma, 02464</p>
            </div>
        )
    }
}
export default Bottom
