import React from 'react';
import Interior from "./Interior/Interior";
import Footer from "../commonComponents/Footer/Footer";
import PowerAndElectricity from "./PowerAndElectricity/PowerAndElectricity";
import SmartControl from "./SmartControl/SmartControl";
import SpecAndOrder from "./SpecAndOrder/SpecAndOrder";
import CarDesign from "./CarDesign/CarDesign";
import TopBlock from "./TopBlock/TopBlock";


const ModelS = () => {
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

export default ModelS;