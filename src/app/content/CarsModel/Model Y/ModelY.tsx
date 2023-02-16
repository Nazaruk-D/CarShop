import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import SafetyAndComfort from "./SafetyAndComfort/SafetyAndComfort";
import AdvantagesAndRange from "./AdvantagesAndRange/AdvantagesAndRange";
import Footer from "../commonComponents/Footer/Footer";
import AutopilotAndInterior from "./AutopilotAndInterior/AutopilotAndInterior";
import SpecsAndOrder from "./SpecsAndOrder/SpecsAndOrder";

const ModelY = () => {
    return (
        <div>
            <Header color={'white'}/>
            <FirstBlock/>
            <SafetyAndComfort/>
            <AdvantagesAndRange/>
            <AutopilotAndInterior/>
            <SpecsAndOrder/>
            <Footer description={true}/>
        </div>
    );
};

export default ModelY;