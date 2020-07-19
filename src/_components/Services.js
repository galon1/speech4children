import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image } from 'semantic-ui-react'
import picture from '../images/profile_pic.jpg'
import '../css/Services.css'
import Shared from './Shared.js'

class Services extends React.Component {


    render() {
        const services = ["Language Development", "Articulation", "Motor Speech Disorders", "Language-based Learning Disabilities",
            "Autism Spectrum Disorders", "Social Communication", "Selective Mutism", "Bilingual Therapy"]
        const precautions= ["TeleHealth appointments available", "Masks required for entry", "Amit Alon will wear a face shield", "Facility is disinfected after every appointment", "Necessary form to check for COVID symptoms"]
        return (
            <div id="services">               
                <table className="center">
                    <tbody>
                        <tr>
                            <td>
                            <h2 className="service-title"><i class="thermometer icon"></i>COVID-19 Precautions: </h2>
                <div class="ui huge list">
                                    {precautions.map(precaution => {
                                        return (
                                            <div class="item">
                                                 <i class="check circle outline icon"></i>{precaution}
                                            </div>
                                        )
                                    })}
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
                <Image src={picture} size='large' bordered floated='right' />
                <Image src={picture} size='large' bordered />

                <Shared />
            </div>
        )
    }
}

export default Services

