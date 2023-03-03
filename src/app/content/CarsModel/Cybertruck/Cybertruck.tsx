import React from 'react';
import FirstBlock from "./FirstBlock/FirstBlock";
import Header from "../../../header/Header";
import Exoskeleton from "./Exoskeleton/Exoskeleton";
import SteelFrame from "./SteelFrame/SteelFrame";

const Cybertruck = () => {

    return (
        <div>
            <Header/>
            <FirstBlock/>
            <Exoskeleton/>
            <SteelFrame/>
        </div>
    );
};

export default Cybertruck;