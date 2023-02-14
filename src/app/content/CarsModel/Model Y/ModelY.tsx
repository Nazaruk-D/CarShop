import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import Safety from "./Safety/Safety";
import Interior from "./Interior/Interior";
import Advantages from "./Advantages/Advantages";
import Autopilot from "./Autopilot/Autopilot";

const ModelY = () => {
    return (
        <div>
            <Header/>
            <FirstBlock/>
            <Safety/>
            <Interior/>
            <Advantages/>
            <Autopilot/>
        </div>
    );
};

export default ModelY;