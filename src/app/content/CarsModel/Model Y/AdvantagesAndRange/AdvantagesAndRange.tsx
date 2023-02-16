import React from 'react';
import Advantages from "../../commonComponents/Advantages/Advantages";
import Safety from "../../commonComponents/Safety/Safety";
import {CharacteristicsPropsType} from "../../../../../common/components/Characteristics/Characteristics";
//@ts-ignore
import modelYRed from "../../../../../common/assets/modelYRed.jfif";
//@ts-ignore
import modelYRangeVideo from "../../../../../common/assets/video/modelYRangeVideo.mp4";

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
const characteristicsData: CharacteristicsPropsType[] = [
    {
        topText: '330',
        measurement: 'mi',
        bottomText: 'Go anywhere with up to 405 miles of estimated range on a single charge',
    },
    {
        topText: '15',
        measurement: 'min',
        bottomText: 'Recharge up to 162 miles in 15 minutes at Supercharger locations',
    },
    {
        topText: '40,000',
        measurement: '+',
        bottomText: 'Superchargers placed along well-traveled routes around the world',
    },
]

const AdvantagesAndRange = () => {
    return (
        <>
            <Advantages data={advantagesData}
                        backgroundImage={modelYRed}
                        title={'Dual Motor'}
                        subtitle={'All-Wheel Drive'}
                        description={'Tesla All-Wheel Drive has two ultra-responsive, independent electric motors that digitally control torque to the front and rear wheels—for far better handling, traction and stability control. Model Y is capable in rain, snow, mud and off-road.'}/>
            <Safety subtitle={'Range'}
                    title={'Go Anywhere'}
                    backgroundImage={modelYRangeVideo}
                    characteristicsData={characteristicsData}
                    description={'Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 40,000 Superchargers worldwide, with six new locations opening every week. Chat with a Tesla Advisor to learn more about Model Y or schedule a demo drive today.'}/>
        </>
    );
};

export default AdvantagesAndRange;