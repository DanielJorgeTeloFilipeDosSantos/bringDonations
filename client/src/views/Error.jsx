import React from "react";

const MESSAGES = {
  404: "Missing page",
  500: "Server Error"
};

const Error = props => {
  return (
    <div>
      <h1>
        Error {props.match.params.code} - {MESSAGES[props.match.params.code]}
      </h1>
    </div>
  );
};

export default Error;
