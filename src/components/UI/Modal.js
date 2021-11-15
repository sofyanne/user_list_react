import React from "react";

import Button from "./Button";

const Modal = props => {
    return <div>
        <div>{props.title}</div>
        <p>{props.message}</p>
        <Button label="Okay" />
    </div>
};

export default Modal;