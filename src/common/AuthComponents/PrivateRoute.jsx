import React, { useContext } from "react";
import authContext from "./AuthContextProvider";
import { Route, Redirect } from "react-router-dom";



export default function PrivateRoute({ children, ...rest }) {
    let auth = useContext(authContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }