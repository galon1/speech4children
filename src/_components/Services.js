import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image, Button } from 'semantic-ui-react'
import picture from '../images/profile_pic.jpg'
import '../css/Services.css'
class Services extends React.Component {


    render() {
        const services = ["Language Development", "Articulation", "Motor Speech Disorders", "Language-based Learning Disabilities",
            "Autism Spectrum Disorders", "Social Communication", "Selective Mutism", "Bilingual Therapy"]
        return (
            <div id="services">
                <table className="center">
                    <tbody>
                        <tr>
                            <td>
                                <Image src={picture} size='large' bordered float='right' />
                            </td>
                            <td>
                                <h2 className="service-title">Available Services for Kids Ages 1-18: </h2>
                                <div class="ui massive list">
                                    {services.map(service => {
                                        return (
                                            <div class="item">
                                                <i class="check icon"></i>
                                                {service}
                                            </div>
                                        )
                                    })}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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

export default Services

