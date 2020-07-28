import React, { Component } from 'react';
import axios from 'axios';
class CaptchaImg extends Component {
    constructor(props) {
        super(props)
        this.state = {
            captchaSrc: null,
        }
        this.refreshCaptcha=this.refreshCaptcha.bind(this);
    }
    refreshCaptcha =()=>{
        axios.get('/refreshCaptcha')
        .then(response => {
            this.setState({ captchaSrc: response.data.captchaSrc })
        })
    }
    componentDidMount() {
        this.refreshCaptcha();
    }
   
    render() {
        return (
            <div className="captchaContiner">
                    <img className='imgCaptcha' src= {this.state.captchaSrc}  onClick={this.refreshCaptcha}  />
            </div>
        )
    }
}

export default CaptchaImg;