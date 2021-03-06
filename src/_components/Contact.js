import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import '../css/Contact.css'
import Header from './Header.js'

class Contact extends React.Component {


    render() {
        return (
            <div>
                <Header />
              <h1 className="page-title">CONTACT US:<br /> <span className="page-title-caption">Please call the office weekdays from 8am-6pm</span></h1>
               <div className= "border"></div>
               <div className="icons-container" >
               <figure className="contact-figure">
               <i class="huge purple building icon"></i>
               <figcaption className="contact-caption">44 Mechanic St, Suite 106-108, Newton MA, 20464</figcaption>
               </figure>
               <figure className="contact-figure">
               <i class="huge purple envelope icon"></i>
               <figcaption className="contact-caption">speech4children@gmail.com</figcaption>
               </figure>
               <figure className="contact-figure">
               <i class="huge purple phone icon"></i>
               <figcaption className="contact-caption">PREFERRED METHOD: Telephone: 617.795.0401</figcaption>
               </figure>
                </div> 
               </div>
        )
    }
}

export default Contact

