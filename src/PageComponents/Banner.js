import React from "react";

import "./Banner.scss";
import Background from "../Images/TD_Banner.svg"
import DiscordIcon from "../Images/Discord_Icon.svg"
import RobloxIcon from "../Images/Roblox_Icon.svg"


import Button from "../Widgets/Button";

class Banner extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="banner">
                <img className="banner-background" src={Background} alt="Banner Background"></img>
                <div className="banner-content">
                    <h1>We are SUPER typical.</h1>
                    <p>Like, super typically typical. Like, <b>we make stuff</b> typical. So typical of us, right?</p>
                    <div className="banner-buttons">
                        <Button type="discord"><img src={DiscordIcon} alt="Discord Icon"></img>Join the Discord</Button>
                        <Button type="roblox"><img src={RobloxIcon} alt="Roblox Icon"></img>Join the Roblox Group</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;