import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image } from 'semantic-ui-react'
import blocks from '../images/blocks.png'
import '../css/Services.css'
import Shared from './Shared.js'

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
                            <h2 className="service-title"><i class="thermometer icon"></i>COVID-19 Precautions: </h2>
                <div class="ui huge list">
                                    <p>We offer in person sessions with careful following of the CDC social distancing regulation to guarantee the safety and health of the kids, caregivers and the clinician.
                                    <Image className="picture-height" src={blocks} size='large' bordered /></p>
                                </div>
                            </td>
                            <td>
                                <h2 className="service-title"><i class="clipboard icon"></i>Available Services for Kids Ages 1-18: </h2>
                                <div class="ui huge list">
                                    {services.map(service => {
                                        return (
                                            <div class="item">
                                                <i class="check circle outline icon"></i>
                                                {service}
                                            </div>
                                        )
                                    })}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Shared />
            </div>
        )
    }
}

export default Services

