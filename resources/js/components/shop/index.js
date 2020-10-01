import React from 'react';
import {useLocation, useHistory, withRouter, Switch, Route } from "react-router-dom";
import AddShop from './addShop';

import NotFound from '../notFound';

const Shop = () => {
    
    return (
        <div className="" >
            <Switch>
                <Route path="/Shop/addShop" exact component={AddShop} />
                {/* <Route path="/order/pursueOrder" exact component={PursueOrder} />
                <Route path="/order/pursueBuy" exact component={PursueBuy} />
                <Route path="/order/guideOrder" exact component={GuideOrder} /> */}
                <Route path="/Shop" component={NotFound} />
            </Switch>
        </div>
    )
}
export default withRouter (Shop);