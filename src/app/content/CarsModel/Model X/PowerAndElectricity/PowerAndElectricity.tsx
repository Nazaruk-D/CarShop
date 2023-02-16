import React from 'react';
import Advantages from "../../commonComponents/Advantages/Advantages";
// @ts-ignore
import ModelXPerformanceHeroDesktopLHD from "../../../../../common/assets/Model-X-Performance-Hero-Desktop-LHD.jfif";
import ElectricPowerTrain from "./ElectricPowerTrain/ElectricPowerTrain";
import {CharacteristicsPropsType} from "../../../../../common/components/Characteristics/Characteristics";


const advantagesData: CharacteristicsPropsType[] = [
    {
        topText: '1,020', measurement: 'hp', bottomText: 'Peak Power',
    },
    {
        topText: '9.9', measurement: 's', bottomText: '1/4 Mile',
    },
    {
        topText: '2.5', measurement: 's', bottomText: '0-60 mph*',
    },
]

const PowerAndElectricity = () => {

    return (
        <>
            <Advantages data={advantagesData} backgroundImage={ModelXPerformanceHeroDesktopLHD} title={'Beyond Ludicrous'} subtitle={'Plaid'} description={'With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. Updated battery architecture enables both Long Range and Plaid configurations to complete back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model X or schedule a demo drive today.'}/>
            <ElectricPowerTrain/>
        </>
    );
};

export default PowerAndElectricity;