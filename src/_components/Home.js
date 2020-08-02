import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Button, Image } from 'semantic-ui-react'
import frontpicture from '../images/apple.jpg'
import amitFront from '../images/imakids.jpeg';
import amitDesk from '../images/amitdesk.jpeg';
import '../css/Home.css'
import Header from './Header.js';
import TestimonialHome from './TestimonialHome.js';
import Bottom from './Bottom.js';

class Home extends React.Component {

    render() {
        return (
            <>
            <img src ={frontpicture} alt="apple" className="background-image" />
            <Header />
            
            <h1 className ="cover-page-description">
            Amit Alon is the sole practicioner at Speech4Children. She is a licensed Speech and Language Pathologist with 25 years of experience working with children aging 1-18.
          <br /><Button className="learn-more" onClick={() => { window.open("./about", "_self")}}>Read More</Button></h1>     
           <div className="purple-background">
                <p className="purple-description">The Speech4Children clinic focuses on a variety of pediatric speech and language disorders including pragmatic and social disorders, autism, articulation disorders including speech motor disorders, and developmental language disorders.</p>
            </div>
            <Image src={amitFront} className="amit-sitting-image" floated='right' />
            <h1 className="amitFront-text"> 
            Amit received her BS in biology from Hebrew University and her MS in Communication Disorders from Emerson College in Boston, MA.Being bilingual (Hebrew/English) Amit has been servicing not only monolingual children, but also specializes in diagnosing and treating bilingual children.{" "}
            <br /><Button className="learn-more" onClick={() => { window.open("./about", "_self")}}>Read More</Button></h1>
            <Image src={amitDesk} className="amit-desk-image" floated='left' />
            <h1 className="amitDesk-text">
            Amit brings a high level of creativity and enthusiasm to intervention. She strongly believes in a family centered practice. The parents, siblings and other main caregivers join the sessions and take an active part in establishing the treatment plan and participating in the sessions’ activities. Weekly explanations and demonstrations of the different activities and how to apply them outside the office are provided to the kids’ caregivers.
            <br /><Button className="learn-more" onClick={() => { window.open("./about", "_self")}}>Read More</Button></h1>
            <TestimonialHome />
            <Bottom />
            </>
            )
        }
    }

export default Home