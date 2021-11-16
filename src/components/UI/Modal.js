import React from "react";

import "./Modal.css";
import Button from "./Button";

const Modal = (props) => {
  return (
    <div className={props.className}>
      <div>{props.title}</div>
      <p>{props.message}</p>
      <Button label="Okay" onClick={props.validation}/>
    </div>
  );
};

export default Modal;
