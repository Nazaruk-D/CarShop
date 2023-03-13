import React from 'react';
import s from "./SelfDriving.module.scss"
import DetailsButton from "../../../../../../../common/components/buttons/DetailsButton/DetailsButton";

const SelfDriving = () => {
    return (
        <div className={s.selfDrivingContainer}>
            <h2 className={s.title}>
                Full Self-Driving Capability
            </h2>
            <p style={{width: "100%", textAlign: "center"}}>$15,000</p>
            <ul>
                <li>All functionality of Basic Autopilot and Enhanced Autopilot</li>
                <li>Traffic Light and Stop Sign Control</li>
                <li>Autosteer on city streets</li>
            </ul>
            <p className={s.description}>The currently enabled features require active driver supervision and do not make the vehicle autonomous. The activation and use of these features are dependent on achieving reliability far in excess of human drivers as demonstrated by billions of miles of experience, as well as regulatory approval, which may take longer in some jurisdictions. As these self-driving features evolve, your car will be continuously upgraded through over-the-air software updates.</p>
            <div className={s.features}>
                <DetailsButton title={"Add"}/>
                <DetailsButton title={"Feature Details"}/>
            </div>
        </div>
    );
};

export default SelfDriving;