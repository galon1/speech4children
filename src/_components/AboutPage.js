import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image } from 'semantic-ui-react'
import  standing from '../images/imastanding.jpeg'
import  working from '../images/amitdesk.jpeg'
import '../css/About.css'
import Shared from './Shared.js'
import  about  from '../textfiles/about.json'

class AboutPage extends React.Component {

    render() {
        return (
            <>
                <h2> About: Speech4Children </h2>
                <Image src={standing} size='large' bordered floated='left' />
                <Image src={working} size='large' bordered='left' />
                <p> {about.text} </p>
             <Shared /> 
                </>
        )
    }
}

export default AboutPage
