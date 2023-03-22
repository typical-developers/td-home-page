import React from "react";

import "./Team.scss";

class Team extends React.Component {
    constructor() {
        super();
    }

    openLink = (link) => {
        window.open(link, "_blank");
    }

    render() {
        return (
            <div className="team" id="team">
                <div className="team-title">
                    <h2>Our Typical Team</h2>
                    <p>A round of applause to everyone listed here as they have somehow stayed sane through everything.</p>
                </div>
                <div className="team-list">
                    {this.props.members.map((member, index) => {
                        return (
                            <div onClick={() => this.openLink(member.link)} className="team-member-card" key={"member-" + index}>
                                <img className="team-pfp" src={member.image}></img>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Team;