import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import '../css/Bottom.css'

class Bottom extends React.Component {

    render() {
        return (
            <div className="black">
                <h1 className="speech4children">Speech4Children
                <div className="menu-container">
                    <div className="margin"></div>
                    <a href="./about" className="bottom-item">ABOUT</a>
                    <a href="./testimonial" className="bottom-item">TESTIMONIALS</a>
                    <a href="./facility" className="bottom-item">FACILITY</a>
                </div>
                </h1>
                <h1 className="contact-us">CONTACT US: <br /> speech4children@gmail.com <br />44 Mechanic Street Suite 106-108 Newton Ma, 02464</h1>
                
            </div>
        )
    }
}
export default Bottom
