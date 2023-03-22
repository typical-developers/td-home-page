import React from "react";

import Banner from "./PageComponents/Banner";
import Experiences from "./PageComponents/Experiences";

function App() {
    return (
        <div className="App">
            <div className="scroll-content">
                <Banner></Banner>
                <Experiences></Experiences>
            </div>
        </div>
    );
}

export default App;
