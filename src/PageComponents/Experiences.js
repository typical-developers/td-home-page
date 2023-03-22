import React from "react";

import "./Experiences.scss";

import Button from "../Widgets/Button";
import RobloxIcon from "../Images/Roblox_Icon.svg"

class Experiences extends React.Component {
    constructor() {
        super();

        this.primaryDiv = React.createRef();
    }

    render() {
        return (
            <div ref={this.primaryDiv} className="experiences" id="experiences">
                <div className="experiences-title">
                    <h2>Our Typical Experiences</h2>
                    <p>Okay, it may be barely any right now, but we plan to make more in the future (probably)!</p>
                </div>
                <div className="experiences-list">
                    {this.props.experiences.map((experience, index) => {
                        return (
                            <div className="experience" key={index}>
                                <div className="experience-image">
                                    <img src={experience.image} alt={experience.title} />
                                </div>
                                <div className="experience-info">
                                    <h3>{experience.title}</h3>
                                    <p>{experience.description}</p>
                                    <div className="play-info">
                                        <Button type="special" width="140px" link={experience.link}><img src={RobloxIcon} alt="Roblox Icon"></img>Play on Roblox</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Experiences;