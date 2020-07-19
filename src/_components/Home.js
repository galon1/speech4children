import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import Contact from './Contact.js';
import { Image, Modal } from 'semantic-ui-react'
import picture from '../images/profile_pic.jpg'
import '../css/About.css'
import '../css/Testimonial.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: [
                `"she was the most professional and caring therapist my son had...My son loved her"- J.V.`,
                `"After beginning speech and language services with Amit, I began to notice a substantial change in my child"-M.J`, `"She is superb at being able to identify the true core issues of what my son has been struggling with"-E.G.`
            ],
            index: 0,
            modalOpen:true,
        };
        this.onClickForward = this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    onClickForward() {
        if (this.state.index + 1 === this.state.text.length) {
            this.setState({ index: 0 })
        } else {
            this.setState({ index: this.state.index + 1 })
        }
    }

    onClickBack() {
        if (this.state.index - 1 === -1) {
            this.setState({ index: this.state.text.length - 1 })
        } else {
            this.setState({ index: this.state.index - 1 })
        }
    }

    handleClose = () => this.setState({ modalOpen: false });

    render() {
        return (
            <>
                <Modal  className="modal" size="small" open={this.state.modalOpen} onClose={this.handleClose} >
                    <Modal.Header>COVID-19 Policy</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                          <h2>Speech4Children's Policy:</h2>
                    <span className="modal-description">Speech4Children is offering both TeleHealth and in person appointments due to COVID-19.<br />
                            We will work with parents to decide the best course of services for each child.<br />
                           You can learn more in the Services section of our website: <br />
                           <div class="medium ui vertical inverted secondary button animated button" onClick={() => { window.open("./services", "_self") }}>
                        <div class="hidden content"> <i class="right arrow icon"></i></div>
                        <div class="visible content">
                            Learn More
                    </div>
                    </div> </span>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
                <div id="about">
                    <Image src={picture} size='large' bordered floated='left' />
                    <p>Amit Alon is the sole practicioner at Speech4Children. Amit Alon is a licensed Speech and Language Pathologist with 25 years of experience working with children from infancy through high school and their families in the public and private sectors. Amit received her BS in biology from Hebrew University
                    and her MS in Communication Disorders from Emerson College in Boston, MA.The Speech4children clinic focuses on a variety of pediatric speech and language disorders including pragmatic and social disorders, autism, articulation disorders including speech motor disorders, and developmental language disorders.
Being bilingual (Hebrew/English) Amit has been servicing not only monolingual children, but also specializes in diagnosing and treating bilingual children.</p>
                    <div class="large ui vertical inverted secondary button animated button" onClick={() => { window.open("./about", "_self") }}>
                        <div class="hidden content"> <i class="right arrow icon"></i></div>
                        <div class="visible content">
                            Learn More
                    </div>
                    </div>
                </div>
                <div className="border" />
                <div id="testimonial">
                    <h1>Testimonials:</h1>
                    <div className="post-container">
                        <div className="post-item">
                            <div className="post-title">{this.state.text[this.state.index]}</div>
                        </div>
                    </div>

                    <div className="buttons">
                        <button class="large ui left labeled secondary basic icon button" onClick={() => this.onClickBack()}>
                            <i class="angle left icon"></i>
                    Back
                    </button>
                        <button class="large ui right labeled secondary basic icon button" onClick={() => this.onClickForward()}>
                            <i class="angle right icon"></i>
                    Next
                    </button>
                        <button class="large ui right labeled secondary basic icon button" onClick={() => { window.open("./testimonial", "_self") }}>
                            <i class="right arrow icon"></i>
                    Learn More
                    </button>
                    </div>
                </div>
                <div className="border" />
                <h1 id="contact">Contact: </h1>
                <Contact />
                <div class="large ui vertical inverted secondary button animated button" onClick={() => document.documentElement.scrollTop = 0}>
                    <div class="hidden content"> <i class="up arrow icon"></i></div>
                    <div class="visible content">
                        Back To Top
                    </div>
                </div>
            </>
        )
    }
}
//         {componets.map((component, index) => {
//                 return (
//                     <>
//                         {component}
//                     </>
//                 )
//             })
//         }
//          <div class="large ui vertical inverted secondary button animated button" onClick={() => document.documentElement.scrollTop = 0}>
//                 <div class="hidden content"> <i class="up arrow icon"></i></div>
//                 <div class="visible content">
//                     Back To Top
//                 </div>
//             </div>
//         </>
//     )
// }

export default Home