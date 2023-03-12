import React, {useContext} from 'react';
import s from "./Autopilot.module.scss"
import DetailsButton from "../../../../../../common/components/buttons/DetailsButton/DetailsButton";
import {Context, ContextType} from "../../../Ordering";
import {useInView} from "react-intersection-observer";

type AutopilotPropsType = {}

const Autopilot: React.FC<AutopilotPropsType> = () => {
    const [context, setContext] = useContext<ContextType>(Context);
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    if(inView) {
        setContext("Autopilot")
    }

    return (
        <div className={s.autopilotContainer} ref={ref}>
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