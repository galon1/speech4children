import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image, Icon, Button } from 'semantic-ui-react'
import picture from '../images/profile_pic.jpg'
import '../css/About.css'

class AboutPage extends React.Component {

    render() {
        return (
            <>
                <h2> About: Speech4Children </h2>
                <Image src={picture} size='large' bordered floated='left' />
                <Image src={picture} size='large' bordered='left' />
                <p>
                    Amit Alon is the sole practicioner at Speech4Children.

                    

                    Amit Alon is a licensed Speech and Language Pathologist with 25 years of experience working with children from infancy through high school and their families in the public and private sectors. Amit received her BS in biology from Hebrew University and her MS in Communication Disorders from Emerson College in Boston, MA.

                    

                    The Speech4children clinic focuses on a variety of pediatric speech and language disorders including pragmatic and social disorders, autism, articulation disorders including speech motor disorders, and developmental language disorders.

                    

                    Being bilingual (Hebrew/English) Amit has been servicing not only monolingual children, but also specializes in diagnosing and treating bilingual children.

                    

                    Amit brings a high level of creativity and enthusiasm to intervention.  She strongly believes in a family centered practice. The parents, siblings and other main caregivers join the sessions and take an active part in establishing the treatment plan and participating in the sessions’ activities. Weekly explanations and demonstrations of the different activities and how to apply them outside the office are provided to the kids’ caregivers. Additional sources to further expand the parent’s knowledge and understanding of their child’s areas of need and suggested treatment approaches are provided.

                    

                    During the last few years Amit has cooperated with the Newton and Brookline Public Schools in addressing the bilingual students’ special needs.
            </p>
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
                </>
        )
    }
}

export default AboutPage
