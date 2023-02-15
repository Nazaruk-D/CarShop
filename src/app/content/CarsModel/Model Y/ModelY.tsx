import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import Comfort from "./Comfort/Comfort";
import Autopilot from "./Autopilot/Autopilot";
import Interior from "./Interior/Interior";
import safetyImage from '../../../../common/assets/safetyImage.png'
import {CharacteristicsPropsType} from "../../../../common/components/Characteristics/Characteristics";
//@ts-ignore
import modelYRed from '../../../../common/assets/modelYRed.jfif'
import Advantages from "../commonComponents/Advantages/Advantages";
import Specs from "./Specs/Specs";
import Safety from "../commonComponents/Safety/Safety";

const advantagesData: CharacteristicsPropsType[] = [
    {
        topText: '2',
        measurement: '',
        bottomText: 'Independent motors digitally control torque to the front and rear wheels',
    },
    {
        topText: '3.5',
        measurement: 's',
        bottomText: 'Quickest acceleration—from zero to 60 mph* in as little as 3.5 seconds',
    },
    {
        topText: 'AWD',
        measurement: '',
        bottomText: 'Capable in rain, snow, mud and off-road with superior traction control',
    },
]

const ModelY = () => {
    return (
        <div>
            <Header/>
            <FirstBlock/>
            <Safety backgroundImage={safetyImage} subtitle={'Safety'} title={'Designed for Safety'} flexDirection={'row-reverse'}
                    description={'Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards. 5-Star Rating Model Y achieved NHTSA 5-star safety ratings in every category and subcategory. Top Safety Pick Model Y received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.'}/>
            <Comfort/>
            <Advantages data={advantagesData} backgroundImage={modelYRed} title={'Dual Motor'}
                        subtitle={'All-Wheel Drive'}
                        description={'Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.'}/>
            <Autopilot/>
            <Interior/>
            <Specs/>
        </div>
    );
};

export default ModelY;