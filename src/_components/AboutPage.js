import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image } from 'semantic-ui-react'
import picture from '../images/profile_pic.jpg'
import '../css/About.css'
import Shared from './Shared.js'
import  about  from '../textfiles/about.json'

class AboutPage extends React.Component {

    render() {
        return (
            <>
                <h2> About: Speech4Children </h2>
                <Image src={picture} size='large' bordered floated='left' />
                <Image src={picture} size='large' bordered='left' />
                <p> {about.text} </p>
             <Shared /> 
                </>
        )
    }
}

export default AboutPage
