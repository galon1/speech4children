import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import { Image } from 'semantic-ui-react'
import Shared from './Shared.js'

class Facility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            "https://picsum.photos/200/300/?image=523",
            "https://picsum.photos/200/300/?image=524"
          ],
          index: 0,
        };
        this.onClickForward = this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)
      }
      

      componentDidMount() {
        let intervalId = setInterval(() => {
          this.setState(prevState => {
              switch(this.state.index){
                  case 0:
                      return {index: this.state.index + 1}
                case 1:
                    return {index: 0}
                default:
                    break;
              }
          });
        }, 3000);
    
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
             <Image src={this.state.images[this.state.index]} size='large' bordered floated='left' />
             <div class="large ui vertical inverted secondary button  button" onClick={() => this.onClickBack()}>
                    <i class="angle left icon"></i>
                </div>
             <div class="large ui vertical inverted secondary button  button" onClick={() => this.onClickForward()}>
                    <i class="angle right icon"></i>
                </div>    
             <Shared />
            </div>
        )
    }
}

export default Facility

