import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ verify, render, component: ViewComponent, ...other }) => {
  return (
    <Route
      {...other}
      render={props => {
        //to go to the element it need to be authorized
        const authorized = verify();
        if (authorized) {
          if (typeof render === "function") {
            return render(props);
          } else if (typeof ViewComponent !== "undefined") {
            return <ViewComponent {...props} />;
          }
          //if it does not work go to sign-up
        } else {
          return <Redirect to="/sign-in" />;
        }
      }}
    />
  );
};
