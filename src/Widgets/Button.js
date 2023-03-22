import React from "react";

import "./Button.scss";

class Button extends React.Component {
    constructor() {
        super();
    }

    click = () => {
        console.log(this.props.link)
        window.open(this.props.link, "_blank");
    }

    render() {
        return (
            <div onClick={this.click} className={`button button-${this.props.type || "special"}`} style={{maxWidth: this.props.width}}>
                {this.props.children}
            </div>
        )
    }
}

export default Button;