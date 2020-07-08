import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import $ from "jquery";
import Slider from "react-slick";
import axios from 'axios';




class ShowProSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pros: [],
            picturePro:[]
            // console.log(users)
        }

    }


    componentDidMount() {
        axios.get('/pros')
            .then(response => {
               
                this.setState({ pros: response.data.pros , picturePro: response.data.picturePro })
                console.log(response.data.picturePro[0].pro_id)
            })
            .catch(error => {
                console.log(error)
            })
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
        const { pros ,picturePro } = this.state;
        // pros.map(pro=>{<div>45</div>})
        // console.log(pros)
        const map1 = pros.map((pro, key) =>
           
            <div className="" key={key}>
                { picturePro.map(    
                                     
                                )
                }
                <div className="divSlider">
                    <div className="divSliderImg"> <img src='./images/imageWeb/aparat-farsgraphic.png' /></div>
                    <div className="divSliderName">{pro.name}</div>
                    <div className="divSliderPrice">{pro.price}</div>
                </div>
            </div>
        );
        // console.log(map1)
        return (
            <div className="showProSliderContainer">
                <div className='showProSliderHead' >
                    {this.props.head}
                </div>
                <div className="showProSliderBody">
                    <div>

                        <Slider {...settings} className='showProSliderSlik'>
                            {map1}
                            {/* <div className="">
                                <div className="divSlider">
                                    {this.state.pros.name[0]}
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
                            </div> */}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}


export default ShowProSlider;