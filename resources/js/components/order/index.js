import React from 'react';
import {useLocation, useHistory, withRouter, Switch, Route } from "react-router-dom";
import AddOrder from './addOrder';
import PursueOrder from './pursueOrder';
import PursueBuy from './pursueBuy';
import GuideOrder from './guideOrder';
import NotFound from '../notFound';

const Order = (props) => {
    const history=useHistory()
    let location = useLocation();

    let showComponentOrder;
    // switch (location.showComponentOrder) {
    //     case 'addOrder':showComponentOrder=<AddOrder />; break;
    //     case 'pursueOrder':showComponentOrder=<PursueOrder />; break;
    //     case 'pursueBuy':showComponentOrder=<PursueBuy />; break;
    //     case 'guideOrder':showComponentOrder=<GuideOrder />; break;
    //     default :showComponentOrder=<AddOrder />; break; 
    // }
    
    return (
        <div className="" >
            <Switch>
                <Route path="/order/addOrder" exact component={AddOrder} />
                <Route path="/order/pursueOrder" exact component={PursueOrder} />
                <Route path="/order/pursueBuy" exact component={PursueBuy} />
                <Route path="/order/guideOrder" exact component={GuideOrder} />
                <Route path="/order" component={NotFound} />

                
            </Switch>
            {/* {showComponentOrder} */}
            {/* {this.location.pathname?location.pathname:''} */}
        </div>
    )
}
export default withRouter (Order);