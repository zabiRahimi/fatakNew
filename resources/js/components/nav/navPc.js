import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
export default function NavPc() {


    return (
        <div className="navPcContainer">
            <div className=""><Link to="/">خانه</Link></div>
            <div className=""><Link to="/">سفارش</Link></div>
            <div className=""><Link to="/">مدیریت کانال</Link></div>
            <div className=""><Link to="/">مدیریت فروشگاه</Link></div>
            <div className=""><Link to="/">درباره ما</Link></div>
            <div className=""><Link to="/">تماس با ما</Link></div>
            <div className=""><Link to="/">ثبت شکایت</Link></div>
            <div className=""><Link to="/">راهنما</Link></div>
        </div>
    )

}