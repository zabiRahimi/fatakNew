

import React from "react";

import { Route, Redirect } from "react-router-dom";

import { useAuth } from "./auth";
 

function PrivateRoute({ component: Component, ...rest }) {

  const {authTokens2} = useAuth();
//   const isAuthenticated = true;
 
console.log(authTokens2)
  return (

    <Route

      {...rest}

      render={props =>

        authTokens2 ? (

          <Component {...props} />

        ) : (

          <Redirect to="/" />

        )

      }

    />

  );
}
 

export default PrivateRoute;
