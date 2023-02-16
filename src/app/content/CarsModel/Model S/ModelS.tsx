import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import Interior from "./Interior/Interior";
import Footer from "../commonComponents/Footer/Footer";
import PowerAndElectricity from "./PowerAndElectricity/PowerAndElectricity";
import SmartControl from "./SmartControl/SmartControl";
import SpecAndOrder from "./SpecAndOrder/SpecAndOrder";
import CarDesign from "./CarDesign/CarDesign";

const ModelS = () => {
    return (
        <div>
            <Header/>
            <FirstBlock/>
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