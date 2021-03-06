import '../css/Testimonial.css';
import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import testimonials from '../textfiles/testimonials.json';
import Header from './Header.js';
import { Button } from 'semantic-ui-react';

class Testimonial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
        };
        this.handleButton = this.handleButton.bind(this)
    }

    handleButton(index) {
        this.setState({ index: index})
    }

    render() {
        const buttons=[0,1,2,3,4,5]
        return (
            <div id="testimonial">
               <Header />
               <h1 className="page-title">TESTIMONIALS:<br /><span className="page-title-caption">from real clients</span></h1>
                <div className="border"></div>
                <div className= "testimonial-button-container">
                {buttons.map((index) =>{
                    return (
                        <Button key={index} basic size='huge' onClick={() => this.handleButton(index)} color={index === this.state.index ? "purple" : null}>{index + 1}</Button>
                    )
                })}
                </div>
                <h2 className="testimonial-person"><i className="star outline icon"></i>{testimonials.titles[this.state.index]}</h2>
                <div className="testimonial-description">{testimonials.description[this.state.index]}</div>
               
                </div>
        )
    }
}

export default Testimonial

