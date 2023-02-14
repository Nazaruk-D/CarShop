import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import Safety from "./Safety/Safety";
import Interior from "./Interior/Interior";

const ModelY = () => {
    return (
        <div>
            <Header/>
            <FirstBlock/>
            <Safety/>
            <Interior/>
        </div>
    );
};

export default ModelY;