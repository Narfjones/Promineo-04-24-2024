import React from "react";
import './Button.css'

const Button = (props) => {
    return (
        
    <button onClick={props.callApi}>
        Press here to generate a joke. Seriously.
    </button>

    );
}

export default Button;