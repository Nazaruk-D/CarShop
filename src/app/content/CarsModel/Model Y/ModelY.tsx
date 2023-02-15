import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import Safety from "./Safety/Safety";
import Comfort from "./Comfort/Comfort";
import Autopilot from "./Autopilot/Autopilot";
import Interior from "./Interior/Interior";
import {CharacteristicsPropsType} from "../../../../common/components/Characteristics/Characteristics";
//@ts-ignore
import modelYRed from '../../../../common/assets/modelYRed.jfif'
import Advantages from "../commonComponents/Advantages/Advantages";

const advantagesData: CharacteristicsPropsType[] = [
    {
        topText: '2', measurement: '', bottomText: 'Independent motors digitally control torque to the front and rear wheels',
    },
    {
        topText: '3.5', measurement: 's', bottomText: 'Quickest acceleration—from zero to 60 mph* in as little as 3.5 seconds',
    },
    {
        topText: 'AWD', measurement: '', bottomText: 'Capable in rain, snow, mud and off-road with superior traction control',
    },
]

const ModelY = () => {
    return (
        <div>
            <Header/>
            <FirstBlock/>
            <Safety/>
            <Comfort/>
            <Advantages data={advantagesData} backgroundImage={modelYRed} title={'Dual Motor'} subtitle={'All-Wheel Drive'} description={'Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.'}/>
            <Autopilot/>
            <Interior/>
        </div>
    );
};

export default ModelY;