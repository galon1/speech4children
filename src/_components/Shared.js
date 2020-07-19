import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import '../css/Shared.css'
class Shared extends React.Component {

    render() {
        return (
            <div className="bottom-buttons">
                <div class="large ui vertical inverted secondary button animated button" onClick={() => document.documentElement.scrollTop = 0}>
                    <div class="hidden content"> <i class="up arrow icon"></i></div>
                    <div class="visible content">
                        Back To Top
                    </div>
                </div>
                <div class="large ui vertical inverted secondary button animated button" onClick={() => { window.open("./", "_self") }}>
                    <div class="hidden content"> <i class="history icon"></i></div>
                    <div class="visible content">
                        Back To Home
                    </div>
                </div>
            </div>
        )
    }
}

export default Shared