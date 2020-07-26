import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Button } from 'semantic-ui-react';
import '../css/TestimonialHome.css'
import brainicon from '../images/brain_icon.png';

class TestimonialHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: [
                `"She was the most professional and caring therapist my son had... With animated and creative personality, she always finds a way to have the children excited and engaged...My son loved her"- J.V.`,
                `"After beginning speech and language services with Amit, I began to notice a substantial change in my child"-M.J`, 
                `"She is superb at being able to identify the true core issues of what my son has been struggling with"-E.G.`,
                `"She has worked with my child's grandmother, my husband, and me to create a language rich environment and refine our daily routines so that my child can successfully bring the lessons from speech therapy into his daily life"-O.S.J`
            ],
            index: 0,
        };
        this.handleButton = this.handleButton.bind(this)
    }

    handleButton(index) {
        this.setState({ index: index})

    }

    render() {
        const buttons = [0, 1, 2, 3]
        const services =['Language Development','Articulation', 'Motor Speech Disorders', 'Language-based Learning Disabilities', 'Autism Spectrum Disorders', 'Social Communication', 'Selective Mutism', 'Bilingual Therapy']
        return (
            <>
            <div className="gray">
                <p className="testimonial-quote"> {this.state.text[this.state.index]}</p>
               <div className="button-container">
                {buttons.map((index) =>{
                    return (
                        <Button className={index === this.state.index ? "active-button" : "dot-buttons"} circular onClick={() => this.handleButton(index)}> </Button>
                    )
                })}
                </div>
            </div>
            <h1 className="services-home-title">OUR SERVICES: </h1>
            <p className="services-home-text"> Speech4Children offers a number of services for children ranging from ages 1 to 18. We work with children and their families to build comphrenseive plans for every child's success.</p>
            <div className ="services-container">
            {services.map((service) => {
                return (
                    <div className="service-caption-text">
                <figure >
                   <img src ={brainicon} alt="brains" className="brain-picture" />
                   <figcaption>{service}</figcaption>
                </figure>
                </div>
                )
            })}
            </div>
            <p className="know-more"> want to know more about our services?
                <br /><Button className="learn-more" onClick={() => { window.open("./contact", "_self")}}>Contact Us</Button>
            </p>
            </>

        )
    }
}

export default TestimonialHome