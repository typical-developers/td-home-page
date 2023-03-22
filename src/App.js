import React from "react";

import Banner from "./PageComponents/Banner";
import Experiences from "./PageComponents/Experiences";
import Team from "./PageComponents/Team";

function App() {
    return (
        <div className="App">
            <div className="scroll-content">
                <Banner></Banner>
                <Experiences experiences={
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
                <Team members={
                    [
                        {
                            name: "Hoofer",
                            role: "Owner & Scripter",
                            image: "https://avatars.githubusercontent.com/u/60201971?v=4",
                            link: "https://www.roblox.com/users/1/profile"
                        },
                        {
                            name: "LuckFire",
                            role: "Manager & UI / UX Designer",
                            image: "https://avatars.githubusercontent.com/u/60201971?v=4",
                            link: "https://www.roblox.com/users/1/profile"
                        },
                        {
                            name: "Kinder",
                            role: "Scripter",
                            image: "https://avatars.githubusercontent.com/u/60201971?v=4",
                            link: "https://www.roblox.com/users/1/profile"
                        },
                        {
                            name: "Shurikeno",
                            role: "Builder",
                            image: "https://avatars.githubusercontent.com/u/60201971?v=4",
                            link: "https://www.roblox.com/users/1/profile"
                        },
                        {
                            name: "Akkoza",
                            role: "Scripter",
                            image: "https://avatars.githubusercontent.com/u/60201971?v=4",
                            link: "https://www.roblox.com/users/1/profile"
                        },
                        {
                            name: "Fuzzy",
                            role: "Manager",
                            image: "https://avatars.githubusercontent.com/u/60201971?v=4",
                            link: "https://www.roblox.com/users/1/profile"
                        },
                        {
                            name: "Lucas",
                            role: "Manager",
                            image: "https://avatars.githubusercontent.com/u/60201971?v=4",
                            link: "https://www.roblox.com/users/1/profile"
                        },
                    ]
                }></Team>
            </div>
        </div>
    );
}

export default App;
