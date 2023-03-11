import React from 'react';
import s from "./Autopilot.module.scss"
import DetailsButton from "../../../../../../common/components/buttons/DetailsButton/DetailsButton";

type AutopilotPropsType = {}

const Autopilot: React.FC<AutopilotPropsType> = () => {
    return (
        <div className={s.autopilotContainer}>
            <h2 className={s.title}>
                Enhanced Autopilot
            </h2>
            <p style={{width: "100%", textAlign: "center"}}>$6,000</p>
            <ul>
                <li>Navigate on Autopilot</li>
                <li>Auto Lane Change</li>
                <li>Autopark</li>
                <li>Summon</li>
                <li>Smart Summon</li>
            </ul>
            <div className={s.features}>
                <DetailsButton title={"Add"}/>
                <DetailsButton title={"Feature Details"}/>
            </div>
        </div>
    );
};

export default Autopilot;