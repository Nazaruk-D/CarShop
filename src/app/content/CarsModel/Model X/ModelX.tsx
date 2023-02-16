import React from 'react';
import TopBlock from "./TopBlock/TopBlock";
import Interior from "./Interior/Interior";
import PowerAndElectricity from "./PowerAndElectricity/PowerAndElectricity";

const ModelX = () => {
    return (
        <div>
            <TopBlock/>
            <Interior/>
            <PowerAndElectricity/>
        </div>
    );
};

export default ModelX;