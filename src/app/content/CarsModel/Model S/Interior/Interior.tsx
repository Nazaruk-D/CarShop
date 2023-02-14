import React from 'react';
import TransitionBlock from "./TransitionBlock/TransitionBlock";
import Displays from "./Displays/Displays";
import SalonBackground from "./SalonBackground/SalonBackground";

const Interior = () => {
    return (
        <>
            <TransitionBlock/>
            <SalonBackground/>
            <Displays/>
        </>
    );
};

export default Interior;