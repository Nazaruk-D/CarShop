import React from 'react';
import Advantages from "../../commonComponents/Advantages/Advantages";
// @ts-ignore
import ModelSPerformanceHero from "../../../../../common/assets/ModelSPerformanceHero.jfif";
import ElectricPowerTrain from "./ElectricPowerTrain/ElectricPowerTrain";
import {CharacteristicsPropsType} from "../../../../../common/components/Characteristics/Characteristics";


const advantagesData: CharacteristicsPropsType[] = [
    {
        topText: '1,020', measurement: 'hp', bottomText: 'Peak Power',
    },
    {
        topText: '9.23', measurement: 's', bottomText: '@155 mph 1/4 mile',
    },
    {
        topText: '1.99', measurement: 's', bottomText: '0-60 mph*',
    },
]

const PowerAndElectricity = () => {

    return (
        <>
            <Advantages data={advantagesData} backgroundImage={ModelSPerformanceHero} title={'Plaid'} subtitle={'Beyond Ludicrous'} description={'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.'}/>
            <ElectricPowerTrain/>
        </>
    );
};

export default PowerAndElectricity;