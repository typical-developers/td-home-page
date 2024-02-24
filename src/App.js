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
                            image: "https://tr.rbxcdn.com/9e97a29ee537dace4ae51533aa6b9b81/768/432/Image/Png",
                            title: "Oaklands 🌳",
                            description: `🌳 Create a tycoon empire in this sandbox game. Chop trees, process lumber, mine rocks and ores, create amazing buildings, and more! There are endless opportunities, from creating complex automated machines, to creating an epic castle of mystery. Have fun earning, exploring, and creating!
                                
                                🛠️ Oaklands is still in early development, we appreciate your patience as issues appear and are resolved!
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
                            image: "https://avatars.githubusercontent.com/u/63945237?v=4",
                            link: "https://www.roblox.com/users/114446765/profile"
                        },
                        {
                            name: "Shurikeno",
                            role: "Builder",
                            image: "https://cdn.discordapp.com/avatars/570645881582518272/a_37df27b8b4b20a7e313b3dacbd106e16.png?size=2048",
                            link: "https://www.roblox.com/users/1310236768/profile"
                        },
                        {
                            name: "Fuzzy",
                            role: "Manager",
                            image: "https://avatars.githubusercontent.com/u/25520160?v=4",
                            link: "https://www.roblox.com/users/107879863/profile"
                        },
                        {
                            name: "Lucas",
                            role: "Manager",
                            image: "https://cdn.discordapp.com/avatars/256815446802694144/4288a0f607886879dd38d828ebaba8bd.png?size=2048",
                            link: "https://www.roblox.com/users/145869236/profile"
                        },
                    ]
                }></Team>
            </div>
        </div>
    );
}

export default App;
