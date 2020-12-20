import React from 'react';
import {withRouter, Switch, Route } from "react-router-dom";

import NotFound from '../notFound';
import Register from './register.js';

const Channel = () => {
    return (
        <div>
            <Switch>
                <Route path="/socialNetwork/register" exact component={Register} />
                {/* <Route path="/socialNetwork/login" exact component={Login} />
                <Route path="/socialNetwork/guide" exact component={guide} /> */}
                <Route path="/socialNetwork" component={NotFound} />
            </Switch>
        </div>
    )
}
export default withRouter (Channel);