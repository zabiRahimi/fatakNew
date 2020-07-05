import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import $ from "jquery";
import Slider from "react-slick";




class ShowProSlider extends Component {
    constructor(props) {
        super(props)


    }


    componentDidMount() {

    }
    render() {
        const settings = {
            
            infinite: true,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 10000,
        };
        return (
            <div className="showProSliderContainer">
                <div className='showProSliderHead' >
                    {this.props.head}
                </div>
                <div className="showProSliderBody">
                    <div>

                        <Slider {...settings} className='showProSliderSlik'>
                            <div className="">
                                <div className="divSlider">
                                    <img src='./images/imageWeb/aparat-farsgraphic.png' />
                                </div>
                            </div>
                            <div className="">
                                <div className="divSlider">
                                    <img src='./images/imageWeb/tango-farsgraphic.png' />
                                </div>
                            </div>
                            <div className="">
                                <div className="divSlider">
                                    <img src='./images/imageWeb/telegram-farsgraphic.png' />
                                </div>
                            </div>
                            <div className="">
                                <div className="divSlider">
                                    <img src='./images/imageWeb/we chat-farsgraphic.png' />
                                </div>
                            </div>
                            <div className="">
                                <div className="divSlider">
                                    <img src='./images/imageWeb/whatsapp.png' />
                                </div>
                            </div>
                            <div className="">
                                <div className="divSlider">
                                    <img src='./images/imageWeb/wikipedia.png' />
                                </div>
                            </div>
                            <div className="">
                                <div className="divSlider">
                                    <img src='./images/imageWeb/yahoomassanger-farsgraphic.png' />
                                </div>
                            </div>
                            <div className="">
                                <div className="divSlider">
                                    <img src='./images/imageWeb/youtube-farsgraphic.png' />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}


export default ShowProSlider;