import React from 'react';
import Advantages from "../../commonComponents/Advantages/Advantages";
// @ts-ignore
import ModelSPerformanceHero from "../../../../../common/assets/ModelSPerformanceHero.jfif";
import {CharacteristicsPropsType} from "../../../../../common/components/Characteristics/Characteristics";
import ElectricPowerTrain, {SomeType} from "../../commonComponents/ElectricPowerTrain/ElectricPowerTrain";


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

const electricPowerTrainData: SomeType[] = [
    {
        title: "Model S",
        description: "Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.",
        characteristicsData: [
            {topText: "3.1", measurement: "s",bottomText: "0-60 mph", color: "black"},
            {topText: "405", measurement: "mi",bottomText: "Range (EPA est.)", color: "black"},
            {topText: "670", measurement: "hp",bottomText: "Peak Power", color: "black"},
        ]
    },
    {
        title: "Model S Plaid",
        description: "Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.",
        characteristicsData: [
            {topText: "1.99", measurement: "s",bottomText: "0-60 mph", color: "black"},
            {topText: "396", measurement: "mi",bottomText: "Range (EPA est.)", color: "black"},
            {topText: "1020", measurement: "hp",bottomText: "Peak Power", color: "black"},
        ]
    },
]


const PowerAndElectricity = () => {

    return (
        <>
            <Advantages data={advantagesData} backgroundImage={ModelSPerformanceHero} title={'Plaid'} subtitle={'Beyond Ludicrous'} description={'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.'}/>
            <ElectricPowerTrain data={electricPowerTrainData} title={"Electric Powertrain"} description={"Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions."}/>

        </>
    );
};

export default PowerAndElectricity;