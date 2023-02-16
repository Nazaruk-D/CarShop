import React from 'react';
import Safety from "../../commonComponents/Safety/Safety";
import Autopilot from "../../commonComponents/Autopilot/Autopilot";
import {CharacteristicsPropsType} from "../../../../../common/components/Characteristics/Characteristics";
//@ts-ignore
import model3RangeCut from "../../../../../common/assets/model3RangeCut.jpg";

const characteristicsData: CharacteristicsPropsType[] = [
    {
        topText: '358',
        measurement: 'mi',
        bottomText: 'Go anywhere with up to 358 mi of estimated range on a single charge',
    },
    {
        topText: '15',
        measurement: 'min',
        bottomText: 'Recharge up to 175 miles in 15 minutes at Supercharger locations',
    },
    {
        topText: '40,000',
        measurement: '+',
        bottomText: 'Superchargers placed along well-traveled routes around the world',
    },
]

const RangeAndAutopilot = () => {
    return (
        <>
            <Safety subtitle={'Range'}
                    title={'Go Anywhere'}
                    backgroundImage={model3RangeCut}
                    characteristicsData={characteristicsData}
                    description={'Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 40,000 Superchargers worldwide, with six new locations opening every week. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today.'}/>
            <Autopilot/>
        </>
    );
};

export default RangeAndAutopilot;