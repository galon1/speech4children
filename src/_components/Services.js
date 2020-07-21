import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image, Modal } from 'semantic-ui-react'
import blocks from '../images/blocks.png'
import '../css/Services.css'
import Shared from './Shared.js'

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: true,
        };
        this.handleClose = this.handleClose.bind(this)
    }

    handleClose = () => this.setState({ modalOpen: false, shouldOpen: false });

    render() {
        const services = ["Language Development", "Articulation", "Motor Speech Disorders", "Language-based Learning Disabilities",
            "Autism Spectrum Disorders", "Social Communication", "Selective Mutism", "Bilingual Therapy"]
        return (
            <div id="services">  
             <Modal  className="modal" size="small" open={this.state.modalOpen} onClose={this.handleClose} >
                    <Modal.Header>COVID-19 Policy</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                          <h2>Speech4Children's Policy:</h2>
                    <span className="modal-description">Speech4Children is offering both TeleHealth and in person appointments due to COVID-19.
                            We will work with parents to decide the best course of action for each child.<br />
                           You can learn more about our services in this section of the website or call the office at 617.795.0401.
                           </span>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>             
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

