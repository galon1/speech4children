import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Button } from 'semantic-ui-react'
import '../css/Contact.css'
import Header from './Header.js'

class Contact extends React.Component {


    render() {
        return (
            <div>
                 <p> <Header /></p>
              <h1 className="page-title">CONACT US:<br /> <span className="page-title-caption">Weekdays from 8am-6pm</span></h1>
               <div className= "border"></div>
               <div className="icons-container" >
               <i class="huge purple building icon"></i><div className="icon-padding"></div>
               <i class="huge purple envelope icon" ></i><div className="icon-padding"></div>
               <i class="huge purple phone icon" ></i><div className="icon-padding"></div>
               </div>
                <div className="description-container">
                    <div className="descriptions">
                <p>44 Mechanic St, Suite 106-108,<br /> Newton MA 02464</p><div className="description-padding"></div></div>
                <div className="descriptions">
                <p>speech4children@gmail.com</p>< br/><br />
                    </div>
                    <Button className="email-button">
                    <a className="email-link" href="mailto:speech4children@gmail.com" >Send an Email</a> 
                    </Button>
                    <div className="description-padding-last"></div>
                <div className="descriptions">
                <p>T: 617.795.0401</p><div className="description-padding"></div></div>
                
            </div>
            </div>
        )
    }
}

export default Contact

