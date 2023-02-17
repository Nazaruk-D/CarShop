import React from 'react';
import TopBlock from "./TopBlock/TopBlock";
import SafetyAndAdvantages from "./SafetyAndAdvantages/SafetyAndAdvantages";
import RangeAndAutopilot from "./RangeAndAutopilot/RangeAndAutopilot";
import Interior from "../commonComponents/Interior/Interior";
import SpecsAndOrder from "./SpecsAndOrder/SpecsAndOrder";
import Footer from "../commonComponents/Footer/Footer";

const Model3 = () => {
    return (
        <div>
            <TopBlock/>
            <SafetyAndAdvantages/>
            <RangeAndAutopilot/>
            <Interior/>
            <SpecsAndOrder/>
            <Footer/>
        </div>
    );
};

export default Model3;