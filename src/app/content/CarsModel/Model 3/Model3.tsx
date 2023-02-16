import React from 'react';
import TopBlock from "./TopBlock/TopBlock";
import SafetyAndAdvantages from "./SafetyAndAdvantages/SafetyAndAdvantages";
import RangeAndAutopilot from "./RangeAndAutopilot/RangeAndAutopilot";
import Interior from "../commonComponents/Interior/Interior";

const Model3 = () => {
    return (
        <div>
            <TopBlock/>
            <SafetyAndAdvantages/>
            <RangeAndAutopilot/>
            <Interior/>
        </div>
    );
};

export default Model3;