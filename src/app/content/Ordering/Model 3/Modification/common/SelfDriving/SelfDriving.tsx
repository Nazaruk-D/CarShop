import React from 'react';
import s from "./SelfDriving.module.scss"
import DetailsButton from "../../../../../../../common/components/buttons/DetailsButton/DetailsButton";
import {OrderType} from "../../../../order-reducer";

type SelfDrivingPropsType = {
    active: OrderType
    onChangeSelfDrivingStatus: (payload: {status: boolean, price: number}) => void
}

const SelfDriving: React.FC<SelfDrivingPropsType> = ({onChangeSelfDrivingStatus, active}) => {
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
                {active.selfDriving?.status
                    ? <DetailsButton title={"Remove"} onClick={() => onChangeSelfDrivingStatus({status: false, price: 0})}/>
                    : <DetailsButton title={"Add"} backgroundColor={"#3E6AE1"} color={"white"} onClick={() => onChangeSelfDrivingStatus({status: true, price: 15000})}/>

                }
                <DetailsButton title={"Feature Details"} onClick={()=>{}}/>
            </div>
        </div>
    );
};

export default SelfDriving;