import React from 'react';
import TopBlock from "./TopBlock/TopBlock";
import Interior from "./Interior/Interior";
import PowerAndElectricity from "./PowerAndElectricity/PowerAndElectricity";
import CarDesign from "./CarDesign/CarDesign";
import SmartControl from "./SmartControl/SmartControl";
import SpecAndOrder from "./SpecAndOrder/SpecAndOrder";
import Footer from "../commonComponents/Footer/Footer";


const ModelX = () => {
    return (
        <div>
            <TopBlock/>
            <Interior/>
            <PowerAndElectricity/>
            <CarDesign/>
            <SmartControl/>
            <SpecAndOrder/>
            <Footer/>
        </div>
    );
};

export default ModelX;