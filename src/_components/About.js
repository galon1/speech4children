import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image } from 'semantic-ui-react'
import  standing from '../images/imastanding.jpeg'
import  working from '../images/amitdesk.jpeg'
import '../css/About.css'
import Header from './Header.js'
import  about  from '../textfiles/about.json'

class About extends React.Component {

    render() {
        return (
            <>
                <Header />
               <h1 className="page-title">ABOUT:<br /><span className="page-title-caption">Amit Alon</span></h1>
               <div className="border"></div>
                <div className="picture-container">
                <Image className="picture" src={standing} bordered floated='left' />
                <Image className="picture" src={working} bordered='left' />
                </div><p className="about-description"> {about.text} </p>
                </>
        )
    }
}

export default About
