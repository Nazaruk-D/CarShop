import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import Display from "./Display/Display";
import TransitionBlock from "./TransitionBlock/TransitionBlock";


const ModelS = () => {
    return (
        <div>
            <Header/>
            <FirstBlock/>
            <TransitionBlock/>
            <Display/>
        </div>
    );
};

export default ModelS;