import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Button } from 'semantic-ui-react'
import '../css/Testimonial.css';
class Testimonial extends React.Component {


    render() {
        const testimonials=[
        `"she was the most professional and caring therapist my son had...My son loved her"- J.V.`,
        `"After beginning speech and language services with Amit, I began to notice a substantial change in my child"-M.J`, `"She is superb at being able to identify the true core issues of what my son has been struggling with"-E.G.`]
        return (
            <div id="testimonial">
                <h1>Testimonials:</h1>
                <div className="post-container">
                   {testimonials.map(testimonial => {
                       return (
                       <div className="post-item">
                       <div className="post-title">
                       {testimonial}
                       </div>
                   </div>
                       )
                   })}
                    
                </div>
            </div>
        )
    }
}

export default Testimonial

