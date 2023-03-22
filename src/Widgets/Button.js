import React from "react";

import "./Button.scss";

class Button extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={`button button-${this.props.type || "special"}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Button;