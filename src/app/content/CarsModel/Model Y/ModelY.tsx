import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import Safety from "./Safety/Safety";
import Interior from "./Interior/Interior";
import Advantages from "./Advantages/Advantages";

const ModelY = () => {
    return (
        <div>
            <Header/>
            <FirstBlock/>
            <Safety/>
            <Interior/>
            <Advantages/>
        </div>
    );
};

export default ModelY;