import React from 'react';
import SafetyAndComfort from "./SafetyAndComfort/SafetyAndComfort";
import AdvantagesAndRange from "./AdvantagesAndRange/AdvantagesAndRange";
import Footer from "../commonComponents/Footer/Footer";
import AutopilotAndInterior from "./AutopilotAndInterior/AutopilotAndInterior";
import SpecsAndOrder from "./SpecsAndOrder/SpecsAndOrder";
import TopBlock from "./TopBlock/TopBlock";

const ModelY = () => {
    return (
        <div>
            <TopBlock/>
            <SafetyAndComfort/>
            <AdvantagesAndRange/>
            <AutopilotAndInterior/>
            <SpecsAndOrder/>
            <Footer/>
        </div>
    );
};

export default ModelY;