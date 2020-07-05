import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import $ from "jquery";


export default function ProPublicHead (){
    return (
        <div className="ProPublicHeadContainer">
            <div className="headFa"><span>فروشگاه اینترنتی</span> فاتک</div>
            <div className="headImg"><img src="./images/imageWeb/alla1.png" /></div>
            <div className="headIn"><a href="">fatak.ir</a></div>
        </div>
    )
}



