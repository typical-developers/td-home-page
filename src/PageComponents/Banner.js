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
            <div className="banner" id="about">
                <img className="banner-background" src={Background} alt="Banner Background"></img>
                <div className="banner-content">
                    <h1>We are SUPER typical.</h1>
                    <p>Like, super typically typical. Like, <b>we make stuff</b> typical. So typical of us, right?</p>
                    <div className="banner-buttons">
                        <Button type="discord" link="https://discord.gg/Typical"><img src={DiscordIcon} alt="Discord Icon"></img>Join the Discord</Button>
                        <Button type="roblox" link="https://www.roblox.com/groups/2700233/Typical-Developers#!/about"><img src={RobloxIcon} alt="Roblox Icon"></img>Join the Roblox Group</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Banner;