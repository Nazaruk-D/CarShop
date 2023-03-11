import React from 'react';
import s from "./Modification.module.scss"
import Title from "./common/Title/Title";
import Options from "./Options/Options";
import Design from "./Design/Design";
import Charging from "./Charging/Charging";
import Order from "./Order/Order";
import CharacteristicsBlock from "./common/CharacteristicsBlock/CharacteristicsBlock";
import Equipment from "./common/Equipment/Equipment";
import Autopilot from "./common/Autopilot/Autopilot";

const charData = [
    {
        topText: "315", measurement: "mi", bottomText: "Range (EPA est.)", color: "black"
    },
    {
        topText: "162", measurement: "mph", bottomText: "Top speed", color: "black"
    },
    {
        topText: "3.1", measurement: "sec", bottomText: "0-60 mph", color: "black"
    },
]
const eqData = [
    {
        title: "Rear-Wheel Drive", buttonTitle: "Model 3", buttonPrice: "$42,990"
    },
    {
        title: "Dual Motor All-Wheel Drive", buttonTitle: "Model 3 Performance", buttonPrice: "$53,990"
    }
]


const Modification = () => {
    return (
        <div className={s.modificationContainer}>
            <div className={s.modificationBlock}>
                <Title title={"Model 3"} date={"Mar 2023"}/>
                <CharacteristicsBlock data={charData}/>
                <Equipment data={eqData} />
                <Autopilot/>
                <Options/>
                <Design/>
                <Charging/>
                <Order/>
            </div>
        </div>
    );
};

export default Modification;