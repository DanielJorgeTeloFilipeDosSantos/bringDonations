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
          console.log(
            "you need 1. restart npm run dev, 2. change something in the code 3. pray for jesus? 4. drink a coffee"
          );
          return <Redirect to="/sign-in" />;
        }
      }}
    />
  );
};
