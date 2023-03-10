import React from 'react';
import s from "./Modification.module.scss"
import Title from "./Title/Title";
import Characteristics from "../../../../common/components/Characteristics/Characteristics";

const Modification = () => {
    return (
        <div className={s.modificationContainer}>
            <div className={s.modificationBlock}>
                <Title/>
                <div className={s.characteristicsBlock}>
                    <Characteristics topText={"315"} measurement={"mi"} bottomText={"Range (EPA est.)"}/>
                    <Characteristics topText={"162"} measurement={"mph"} bottomText={"Top speed"}/>
                    <Characteristics topText={"3.1"} measurement={"sec"} bottomText={"0-60 mph"}/>
                </div>
            </div>
        </div>
    );
};

export default Modification;