import React, { useState } from 'react';
import {useLocation, useHistory, withRouter, Switch, Route } from "react-router-dom";
import AddShop from './addShop';

import NotFound from '../notFound';
import login from './login';
import PrivateRoute from './privateRoute';
import Dashbord from './panel/index.js';
import { AuthContext } from './auth';

const Shop = (props) => {
    


    const [authTokens, setAuthTokens] = useState();
    
  
    const setTokens = (data) => {
  
      localStorage.setItem("tokens", JSON.stringify(data));
  
      setAuthTokens(data);
    //   console.log(data)
  
    }
      
      const authTokens2=localStorage.getItem("tokens");
  
    return (
        <div className="" >
            <Switch>
                {/* <AuthContext.Provider value={false}> */}
                {/* <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}> */}
                <AuthContext.Provider value={{ authTokens2, setAuthTokens: setTokens }}>
                    <Route path="/Shop/addShop" exact component={AddShop} />
                    <Route path="/Shop/login" exact component={login} />
                    <PrivateRoute path="/Shop/dashbord" exact component={Dashbord} />
                    {/* <Route path="/order/pursueOrder" exact component={PursueOrder} />
                    <Route path="/order/pursueBuy" exact component={PursueBuy} />
                    <Route path="/order/guideOrder" exact component={GuideOrder} /> */}
                    <Route path="/Shop" component={NotFound} />
                </AuthContext.Provider >
            </Switch>
        </div>
    )
}
export default withRouter (Shop);