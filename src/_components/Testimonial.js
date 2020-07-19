import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import '../css/Testimonial.css';
import testimonials from '../textfiles/testimonials.json';

class Testimonial extends React.Component {
    render() {
        return (
            <div id="testimonial">
                <h1>Testimonials:</h1>
                <div className="testimonial-container">
                    {testimonials.description.map((testimonial, index) => {
                        return (
                            <div className="testimonial-item">
                                <h2>{testimonials.titles[index]}</h2>
                                <div className="description">{testimonial}</div>
                                <div className="border"></div>
                            </div>
                        )
                    })}

                </div>
                <div class="large ui vertical inverted secondary button animated button" onClick={() => document.documentElement.scrollTop = 0}>
                    <div class="hidden content"> <i class="up arrow icon"></i></div>
                    <div class="visible content">
                        Back To Top
                    </div>
                </div>
                <div class="large ui vertical inverted secondary button animated button" onClick={() => { window.open("./", "_self")}}>
                    <div class="hidden content"> <i class="history icon"></i></div>
                    <div class="visible content">
                        Back To Home
                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonial

