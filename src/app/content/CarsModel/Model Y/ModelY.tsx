import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import Safety from "./Safety/Safety";
import Comfort from "./Comfort/Comfort";
import Advantages from "./Advantages/Advantages";
import Autopilot from "./Autopilot/Autopilot";
import Interior from "./Interior/Interior";

const ModelY = () => {
    //переделать advantages на common компонент
    return (
        <div>
            <Header/>
            <FirstBlock/>
            <Safety/>
            <Comfort/>
            <Advantages/>
            <Autopilot/>
            <Interior/>
        </div>
    );
};

export default ModelY;