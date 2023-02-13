import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import TransitionBlock from "./TransitionBlock/TransitionBlock";
import Interior from "./Interior/Interior";
import Displays from "./Displays/Displays";


const ModelS = () => {
    return (
        <div>
            <Header/>
            <FirstBlock/>
            <TransitionBlock/>
            <Interior/>
            <Displays/>
        </div>
    );
};

export default ModelS;