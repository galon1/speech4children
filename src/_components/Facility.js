import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image } from 'semantic-ui-react'
import building from '../images/building.jpeg'
import beanbag from '../images/beanbag.jpeg'
import room1 from '../images/room1.jpeg'
import roomcouch from '../images/roomcouch.jpeg'
import roomdoor from '../images/roomdoor.jpeg'
import sign from '../images/sign.jpeg'
import waitingroom from '../images/waitingroom.jpeg'
import '../css/Facility.css'
import Header from './Header.js';

class Facility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            building, sign, roomdoor, roomcouch, waitingroom, beanbag, room1
          ],
          index: 0,
        };
        this.onClickForward = this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)
      }
      

      componentDidMount() {
        let intervalId = setInterval(() => {
          this.setState(prevState => {
            if(this.state.index + 1 === this.state.images.length){
              return { index: 0}
          } else {
              return {index: this.state.index + 1}
          }
          });
        }, 2050);
    
        this.setState({
          intervalId
        });
      }
    
      componentWillUnmount() {
        clearInterval(this.state.intervalId);
      }

      onClickForward() {
          if(this.state.index + 1 === this.state.images.length){
              this.setState({ index: 0})
          } else {
              this.setState({index: this.state.index + 1})
          }
      }

      onClickBack() {
        if(this.state.index - 1 === -1){
            this.setState({ index: this.state.images.length -1 })
        } else {
            this.setState({index: this.state.index - 1})
        }
      }


    render() {
        return (
            <div id="facility">
              <p> <Header /></p>
              <h1 className="page-title">The Facility:<br /> <span className="page-title-caption">44 Mechanic St, Newton MA</span></h1>
                <div className="border"></div>
             <Image className="office-pictures" src={this.state.images[this.state.index]} size='large' bordered/>
           <div className="arrow-buttons">
           <div class="large ui vertical inverted secondary button  button" onClick={() => this.onClickBack()}>
                    <i class="angle left icon"></i>
                </div>
             <div class="large ui vertical inverted secondary button  button" onClick={() => this.onClickForward()}>
                    <i class="angle right icon"></i>
                </div>  
                </div>
             </div>
        )
    }
}

export default Facility

