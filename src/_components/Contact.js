import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image, Button } from 'semantic-ui-react'
import picture from '../images/profile_pic.jpg'
import '../css/Contact.css'


class Contact extends React.Component {


    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <Image src={picture} size='large' bordered float='right' />
                            </td>
                            <td>
                            <span><h2><i class="home icon"></i> Address:</h2>
                                44 Mechanic Street
                                Suite 106-108
                                Newton Ma, 02464
                    <h2><i class="envelope icon"></i>Email:</h2>
                    speech4children@gmail.com<br />
                    <Button basic color="black">
                    <a className="email-link" href="mailto:speech4children@gmail.com" >Send an Email</a> 
                    </Button>
                <h2><i class="phone icon"></i>Phone:</h2>
                 617.795.0401</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Contact

