import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image } from 'semantic-ui-react'
import picture from '../images/profile_pic.jpg'

class Facility extends React.Component {


    render() {
        return (
            <div id="facility">
             <Image src={picture} size='large' bordered floated='left' />
             <Image src={picture} size='large' bordered floated='left' />
             <Image src={picture} size='large' bordered floated='left' />
             <Image src={picture} size='large' bordered floated='left' />
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
            </div>
        )
    }
}

export default Facility

