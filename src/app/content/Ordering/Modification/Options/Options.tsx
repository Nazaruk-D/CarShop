import React from 'react';
import s from "./Options.module.scss"
import Characteristics from "../../../../../common/components/Characteristics/Characteristics";
import ScheduleButton from "../../../../../common/components/buttons/ScheduleButton/ScheduleButton";
import DetailsButton from "../../../../../common/components/buttons/DetailsButton/DetailsButton";

const Options = () => {
    return (
        <div className={s.optionsContainer}>
            <div className={s.characteristicsBlock}>
                <Characteristics topText={"315"} measurement={"mi"} bottomText={"Range (EPA est.)"} color={"black"}/>
                <Characteristics topText={"162"} measurement={"mph"} bottomText={"Top speed"} color={"black"}/>
                <Characteristics topText={"3.1"} measurement={"sec"} bottomText={"0-60 mph"} color={"black"}/>
            </div>
            <div className={s.chooseBlock}>
                <p className={s.title}>Raer-Wheel Drive</p>
                <div className={s.buttonBlock}>
                    <ScheduleButton title={"Model 3"}
                                    price={"$42,990"}
                                    width={"100%"}
                                    justifyContent={"space-between"}
                                    border={'3px solid rgba(22, 63, 246, 0.85)'}
                                    color={'rgba(0, 0, 0, 0.8)'}
                                    onClick={() => {}}/>
                </div>
                <p className={s.title}>Dual Motor All-Wheel Drive</p>
                <div className={s.buttonBlock}>
                    <ScheduleButton title={"Model 3 Performance"}
                                    price={"$53,990"}
                                    width={"100%"}
                                    justifyContent={"space-between"}
                                    border={'3px solid rgba(22, 63, 246, 0.85)'}
                                    color={'rgba(0, 0, 0, 0.8)'}
                                    onClick={() => {}}/>
                </div>
                <div className={s.features}>
                    <DetailsButton title={"Feature Details"}/>
                </div>

            </div>
        </div>
    );
};

export default Options;