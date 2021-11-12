import React from "react";

const Button = (props) => {
  return (
    <button id={props.id} onClick={props.onClick} type={props.type}>
      {props.label}
    </button>
  );
};

export default Button;
