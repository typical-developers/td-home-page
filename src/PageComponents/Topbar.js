import React from "react";

import TDIcon from "../Images/TD_Icon.svg"

import "./Topbar.scss"

class Topbar extends React.Component {
    constructor() {
        super();

        this.elements = [
            "about",
            "experiences",
            "team"
        ]

        // Create a ref for each element
        this.elements.forEach((element) => {
            this[element] = React.createRef();
        });
    }

    jumpTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "end" });
    }

    getActive = () => {
        let active = "about";

        this.elements.forEach((element) => {
            console.log(this[element].current);
            if (this[element].current && this[element].current.getBoundingClientRect().top < 0) {
                active = element;
            }
        });

        return active;
    }

    // Refresh the active link when the user scrolls
    componentDidMount() {
        window.addEventListener("scroll", () => {
            this.forceUpdate();
        });
    }
    
    render() {
        let active = this.getActive();

        return (
            <div className="topbar">
                <div className="topbar-logo">
                    <img src={TDIcon}></img>
                    <h1>Typical Developers</h1>
                </div>
                <div className="topbar-links">
                    <a href="#" ref={this["about"]} className={active == "about" ? "active" : "inactive"} onClick={() => this.jumpTo("about")}>About</a>
                    <a href="#" className={active == "experiences" ? "active" : "inactive"} onClick={() => this.jumpTo("experiences")}>Experiences</a>
                    <a href="#" className={active == "team" ? "active" : "inactive"} onClick={() => this.jumpTo("team")}>The Team</a>
                </div>
            </div>
        )
    }
}

export default Topbar;