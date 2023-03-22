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
        ];
    }

    jumpTo = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "end" });
        this.forceUpdate();
    }

    getActive = () => {
        let active = "about";
        this.elements.forEach((element) => {
            if (this.props.refList[element]?.current?.primaryDiv?.current?.getBoundingClientRect().top <= 150) {
                active = element;
            }
        });

        return active;
    }

    componentDidMount() {
        this.checkInterval = setInterval(() => {
            this.forceUpdate();
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.checkInterval);
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
                    <a className={active === "about" ? "active" : "inactive"} onClick={() => this.jumpTo("about")}>About</a>
                    <a className={active === "experiences" ? "active" : "inactive"} onClick={() => this.jumpTo("experiences")}>Experiences</a>
                    <a className={active === "team" ? "active" : "inactive"} onClick={() => this.jumpTo("team")}>The Team</a>
                </div>
            </div>
        )
    }
}

export default Topbar;