import React from "react";

import Banner from "./PageComponents/Banner";
import Experiences from "./PageComponents/Experiences";

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
                            `
                        }
                    ]
                }></Experiences>
            </div>
        </div>
    );
}

export default App;
