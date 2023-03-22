import React from "react";

import Banner from "./PageComponents/Banner";
import Experiences from "./PageComponents/Experiences";
import Team from "./PageComponents/Team";
import Topbar from "./PageComponents/Topbar";


function App() {
    // Create refs for each section
    const aboutRef = React.createRef();
    const experiencesRef = React.createRef();
    const teamRef = React.createRef();
    
    return (
        <div className="App">
            <Topbar refList={{"about": aboutRef, "experiences": experiencesRef, "team": teamRef}}></Topbar>
            <div className="scroll-content">
                <Banner ref={aboutRef}></Banner>
                <Experiences ref={experiencesRef} experiences={
                    [
                        {
                            image: "https://tr.rbxcdn.com/880d89f2adc0f1c1b89d67828fa0f4c5/768/432/Image/Png",
                            title: "Oaklands",
                            description: `🍀 A game about chopping trees down and mining ores and building stuff with it.
                                📜️ The island expansion update is out now! Try out the new island and explore the new areas.
                                
                                ⚠️ This experience is currently in an alpha state! Please expect to run into issues. If you do happen to run into any issues, please report them on our group wall or in the community server!
                                
                                ⭐ "Muneeb Approved" - 11/29/2022
                            `,
                            link: "https://www.roblox.com/games/9938675423/Oaklands"
                        },
                        {
                            image: "https://tr.rbxcdn.com/302f8a9c1602cbb283cf74ed6cf67890/768/432/Image/Png",
                            title: "Sea Cleaning Simulator 🌊",
                            description: `🌊 Sea Cleaning Simulator is a game where you work with others to clean the seas! You can collect trash, level up to unlock more boats, and save our seas!

                            ⛵ The purpose of this game is to spread awareness about #TeamSeas. For every dollar donated, a pound of trash is cleaned from lakes, rivers, and oceans. You can support the cause by donating to them on their website, where 100% of the profit they earn goes DIRECTLY to charity.
                            
                            Thank you for playing! #TeamSeas
                            `,
                            link: "https://www.roblox.com/games/7776498299/Sea-Cleaning-Simulator-TeamSeas"
                        }
                    ]
                }></Experiences>
                <Team ref={teamRef} members={
                    [
                        {
                            name: "Hoofer",
                            role: "Lead & Scripter",
                            image: "https://avatars.githubusercontent.com/u/60201971?v=4",
                            link: "https://www.roblox.com/users/1182777055/profile"
                        },
                        {
                            name: "LuckFire",
                            role: "UI / UX Designer & Manager",
                            image: "https://avatars.githubusercontent.com/u/39076891?v=4",
                            link: "https://www.roblox.com/users/36347722/profile"
                        },
                        {
                            name: "Kinder",
                            role: "Scripter",
                            image: "https://cdn.discordapp.com/avatars/342048751075983360/907a8ae900462f90f9dafac11411fafd.webp?size=2048",
                            link: "https://www.roblox.com/users/114446765/profile"
                        },
                        {
                            name: "Shurikeno",
                            role: "Builder",
                            image: "https://cdn.discordapp.com/avatars/570645881582518272/a_cb512dad6d090885252ee47594796d34.gif?size=2048",
                            link: "https://www.roblox.com/users/1310236768/profile"
                        },
                        {
                            name: "Akkoza",
                            role: "Scripter",
                            image: "https://cdn.discordapp.com/avatars/703448942519517246/b846c13e19fbc54df638bf3387d3a622.webp?size=2048",
                            link: "https://www.roblox.com/users/406236/profile"
                        },
                        {
                            name: "Fuzzy",
                            role: "Manager",
                            image: "https://cdn.discordapp.com/avatars/337440972239798273/61489bf79f5b94a059af81c70933a0f2.webp?size=2048",
                            link: "https://www.roblox.com/users/107879863/profile"
                        },
                        {
                            name: "Lucas",
                            role: "Manager",
                            image: "https://cdn.discordapp.com/avatars/256815446802694144/58662ec3c621f00d7619521a743c96bb.webp?size=2048",
                            link: "https://www.roblox.com/users/145869236/profile"
                        },
                    ]
                }></Team>
            </div>
        </div>
    );
}

export default App;
