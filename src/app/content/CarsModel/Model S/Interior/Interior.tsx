import React from 'react';
import TransitionBlock from "./TransitionBlock/TransitionBlock";
import Displays from "./Displays/Displays";
import SalonBackground from "./SalonBackground/SalonBackground";
import Salon from "./Salon/Salon";

const Interior = () => {
    return (
        <>
            <TransitionBlock/>
            <SalonBackground/>
            <Displays/>
            <Salon/>
        </>
    );
};

export default Interior;