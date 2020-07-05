import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import $ from "jquery";
import ProPublicHead from './proPublicHead.js';




class ProPublic extends Component {
    constructor(props) {
        super(props)
       
        
    }
  
   
    componentDidMount(){
        
        }
  
        
    
    render() {
        return (
            <div className="ProPublicContiner" id=''>
               <ProPublicHead />
            </div>
        )
    }
}


export default ProPublic;