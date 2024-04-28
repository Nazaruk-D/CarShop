import React from 'react';
import Autopilot from "../../commonComponents/Autopilot/Autopilot";
import Interior from "../../commonComponents/Interior/Interior";

const AutopilotAndInterior = () => {
    return (
        <>
            <Autopilot model={'Model Y'}/>
            <Interior/>
        </>
    );
};

export default AutopilotAndInterior;