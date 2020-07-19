import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import '../css/Testimonial.css';
import testimonials from '../textfiles/testimonials.json';
import Shared from './Shared.js'

class Testimonial extends React.Component {
    render() {
        return (
            <div id="testimonial">
                <h1>Testimonials:</h1>
                <div className="testimonial-container">
                    {testimonials.description.map((testimonial, index) => {
                        return (
                            <div className="testimonial-item">
                                <h2><i class="star outline icon"></i>{testimonials.titles[index]}</h2>
                                <div className="description">{testimonial}</div>
                                <div className="border"></div>
                            </div>
                        )
                    })}
                </div>
                <Shared />
            </div>
        )
    }
}

export default Testimonial

