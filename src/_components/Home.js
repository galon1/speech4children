import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Contact from './Contact.js';
import { Image } from 'semantic-ui-react'
import frontpicture from '../images/imakids.jpeg'
import '../css/About.css'
import '../css/Testimonial.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: [
                `"She was the most professional and caring therapist my son had...My son loved her"- J.V.`,
                `"After beginning speech and language services with Amit, I began to notice a substantial change in my child"-M.J`, 
                `"She is superb at being able to identify the true core issues of what my son has been struggling with"-E.G.`,
                `"She has worked with my child's grandmother, my husband, and me to create a language rich environment and refine our daily routines so that my child can successfully bring the lessons from speech therapy into his daily life"-O.S.J`
            ],
        };
    }

    render() {
        return (
            <>
                <div id="about">
                    <Image src={frontpicture} className="amit-desk-picture" floated='left' />
                    <p>Amit Alon is the sole practicioner at Speech4Children. Amit Alon is a licensed Speech and Language Pathologist with 25 years of experience working with children from infancy through high school and their families in the public and private sectors. Amit received her BS in biology from Hebrew University
                    and her MS in Communication Disorders from Emerson College in Boston, MA.The Speech4children clinic focuses on a variety of pediatric speech and language disorders including pragmatic and social disorders, autism, articulation disorders including speech motor disorders, and developmental language disorders.
Being bilingual (Hebrew/English) Amit has been servicing not only monolingual children, but also specializes in diagnosing and treating bilingual children.{" "}
                    <div class="large ui vertical inverted secondary button animated button" onClick={() => { window.open("./about", "_self") }}>
                        <div class="hidden content"> <i class="right arrow icon"></i></div>
                        <div class="visible content">
                            Learn More
                    </div>
                    </div>
                    </p>
                </div>
                <div className="border" />
                    <h1 id="testimonial">Testimonials:</h1>
                    <div className="post-container">
                            {this.state.text.map((testimonial) => {
                                return (
                                 <div className="post-item">
                                <div className="post-title">{testimonial}</div></div>
                                )
                            })}
                    </div>
                        <button class="huge ui right labeled secondary basic icon button" onClick={() => { window.open("./testimonial", "_self") }}>
                            <i class="right arrow icon"></i>
                    See All
                    </button>
                <div className="border" />
                <h1 id="contact">Contact: </h1>
                <Contact />
                <div class="large ui vertical inverted secondary button animated button" onClick={() => document.documentElement.scrollTop = 0}>
                    <div class="hidden content"> <i class="up arrow icon"></i></div>
                    <div class="visible content">
                        Back To Top
                    </div>
                </div>
            </>
        )
    }
}

export default Home