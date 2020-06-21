import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import NavPc from "./navPc.js";
import NavMo from "./navMo.js";


class Nav extends Component {
  
    render() {
        return (
            <div className="navContiner">
                <div className="navCRight">
                    <NavMo />
                </div>
                <div className="navCLeft"><img src="./images/imageWeb/iran.png"/></div>
            </div>
        )
    }
}

export default Nav;