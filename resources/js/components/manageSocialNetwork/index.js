import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {useLocation } from "react-router-dom";
import LoginSocialNetwork from './loginSocialNetwork';
import SignUpSocialNetwork from './signUpSocialNetwork';
import GuideSocialNetwork from './guideSocialNetwork';





const ManageSocialNetwork = () => {

    let location = useLocation();

    let showComponentSocialNetwork;
    switch (location.showComponentSocialNetwork) {
        case 'loginSocialNetwork':showComponentSocialNetwork=<LoginSocialNetwork />; break;
        case 'signUpSocialNetwork':showComponentSocialNetwork=<SignUpSocialNetwork/>; break;
        case 'guideSocialNetwork':showComponentSocialNetwork=<GuideSocialNetwork />; break;
    }
    return (
        <div className="" >
            ManageSocialNetwork
            {showComponentSocialNetwork}
            {/* {this.location.pathname?location.pathname:''} */}
        </div>
    )
}
export default ManageSocialNetwork;