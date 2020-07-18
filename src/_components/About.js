import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image, Icon, Button } from 'semantic-ui-react'
import picture from '../images/profile_pic.jpg'
import '../css/About.css'

class About extends React.Component {

    render() {
        return (
            <div id="about">
                <Image src={picture} size='large' bordered floated='left' />
                <p>Amit Alon is the sole practicioner at Speech4Children. Amit Alon is a licensed Speech and Language Pathologist with 25 years of experience working with children from infancy through high school and their families in the public and private sectors. Amit received her BS in biology from Hebrew University
                and her MS in Communication Disorders from Emerson College in Boston, MA.The Speech4children clinic focuses on a variety of pediatric speech and language disorders including pragmatic and social disorders, autism, articulation disorders including speech motor disorders, and developmental language disorders.
Being bilingual (Hebrew/English) Amit has been servicing not only monolingual children, but also specializes in diagnosing and treating bilingual children.</p>
                <div class="large ui vertical inverted secondary button animated button" onClick={() => { window.open("./about", "_self")}}>
                    <div class="hidden content"> <i class="right arrow icon"></i></div>
                    <div class="visible content">
                       Learn More
                    </div>
                </div>
            </div>
        )
    }
}

export default About

