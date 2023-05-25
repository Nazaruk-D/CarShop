import React, {useContext, useEffect} from 'react';
import s from "./Autopilot.module.scss"
import DetailsButton from "../../../../../common/components/buttons/DetailsButton/DetailsButton";
import {useInView} from "react-intersection-observer";
import {Context, ContextType} from "../../Context";
import {OrderType} from "../../../../../types/OrderType";

type AutopilotPropsType = {
    active: OrderType
    onChangeAutopilotStatus: (payload: {status: boolean, price: number}) => void
}

const Autopilot: React.FC<AutopilotPropsType> = ({active, onChangeAutopilotStatus}) => {
    const [context, setContext] = useContext<ContextType>(Context);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(()=>{
        if(inView) {
            setContext("Autopilot")
        }
    },[inView])

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
                {active.autopilot.status
                    ? <DetailsButton title={"Remove"} onClick={() => onChangeAutopilotStatus({status: false, price: 0})}/>
                    : <DetailsButton title={"Add"} backgroundColor={"#3E6AE1"} color={"white"} onClick={() => onChangeAutopilotStatus({status: true, price: 6000})}/>

                }
                <DetailsButton title={"Feature Details"} onClick={()=>{}}/>
            </div>
        </div>
    );
};

export default Autopilot;

