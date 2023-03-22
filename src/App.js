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
                            image: "https://tr.rbxcdn.com/6bb7410d669467f6a0066962ae6098ed/768/432/Image/Png",
                            title: "Gameboy Emulator",
                            description: `⟼» We are in no way responsible for what ROMs you use. We do not supply them, you may get them from your sources. This game is not associated with Nintendo.

                            ⟼» This game supports and emulates the ROMs of the normal Gameboy and the Gameboy Color.

                            ⟼» Made using a port of LuaGB! Massive credits to them for making this possible.
                            `,
                            link: "https://www.roblox.com/games/5493847492/Gameboy-Emulator-v2-Open-Source"
                        }
                    ]
                }></Experiences>
                <Team ref={teamRef} members={
                    [
                        {
                            name: "Hoofer",
                            role: "Owner & Scripter",
                            image: "https://avatars.githubusercontent.com/u/60201971?v=4",
                            link: "https://www.roblox.com/users/1182777055/profile"
                        },
                        {
                            name: "LuckFire",
                            role: "Manager & UI / UX Designer",
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
