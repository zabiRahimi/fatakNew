import React from 'react';
import {useLocation } from "react-router-dom";
import AddOrder from './addOrder';
import PursueOrder from './pursueOrder';
import PursueBuy from './pursueBuy';
import GuideOrder from './guideOrder';

const Order = () => {

    let location = useLocation();

    let showComponentOrder;
    switch (location.showComponentOrder) {
        case 'addOrder':showComponentOrder=<AddOrder />; break;
        case 'pursueOrder':showComponentOrder=<PursueOrder />; break;
        case 'pursueBuy':showComponentOrder=<PursueBuy />; break;
        case 'guideOrder':showComponentOrder=<GuideOrder />; break;
    }
    return (
        <div className="" >
            Order
            {showComponentOrder}
            {/* {this.location.pathname?location.pathname:''} */}
        </div>
    )
}
export default Order;