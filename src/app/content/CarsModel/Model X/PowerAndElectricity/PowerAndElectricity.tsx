import React from 'react';
import Advantages from "../../commonComponents/Advantages/Advantages";
// @ts-ignore
import ModelXPerformanceHeroDesktopLHD from "../../../../../common/assets/Model-X-Performance-Hero-Desktop-LHD.jfif";
import ElectricPowerTrain, {SomeType} from "../../commonComponents/ElectricPowerTrain/ElectricPowerTrain";
import {CharacteristicsPropsType} from "../../../../../common/components/Characteristics/Characteristics";
import Safety from "../../commonComponents/Safety/Safety";
// @ts-ignore
import ModelXUtilityHeroDesktopLHD from "../../../../../common/assets/Model-X-Utility-Hero-Desktop-LHD.jfif";


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

const electricPowerTrainData: SomeType[] = [
    {
        title: "Model X",
        description: "Dual Motor All-Wheel Drive platform has the longest range, and now delivers insane power and acceleration.",
        characteristicsData: [
            {topText: "3.8", measurement: "s",bottomText: "0-60 mph", color: "black"},
            {topText: "348", measurement: "mi",bottomText: "Range (EPA est.)", color: "black"},
            {topText: "670", measurement: "hp",bottomText: "Peak Power", color: "black"},
        ]
    },
    {
        title: "Model X Plaid",
        description: "Tri Motor All-Wheel Drive platform with torque vectoring features three independent motors, each with a carbon-sleeved rotor that maintains 1,000+ horsepower all the way to top speed.",
        characteristicsData: [
            {topText: "2.5", measurement: "s",bottomText: "0-60 mph", color: "black"},
            {topText: "333", measurement: "mi",bottomText: "Range (EPA est.)", color: "black"},
            {topText: "1020", measurement: "hp",bottomText: "Peak Power", color: "black"},
        ]
    },
]

const characteristicsData: CharacteristicsPropsType[] = [
    {
        topText: '92',
        measurement: 'ft³',
        bottomText: 'Up to 92 ft³ of storage',
    },
    {
        topText: '5,000',
        measurement: 'lbs',
        bottomText: 'Tow up to 5,000 lbs',
    },
    {
        topText: 'Door',
        measurement: '',
        bottomText: 'Falcon Wing Doors',
    },
]


const PowerAndElectricity = () => {

    return (
        <>
            <Advantages data={advantagesData} backgroundImage={ModelXPerformanceHeroDesktopLHD} title={'Beyond Ludicrous'} subtitle={'Plaid'} description={'With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. Updated battery architecture enables both Long Range and Plaid configurations to complete back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model X or schedule a demo drive today.'}/>
            <ElectricPowerTrain data={electricPowerTrainData} title={"Electric Powertrain"} description={"Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions."}/>
            <Safety backgroundImage={ModelXUtilityHeroDesktopLHD}
                    subtitle={'Utility'}
                    title={'Even More Capable'}
                    flexDirection={'row-reverse'}
                    characteristicsData={characteristicsData}
                    backgroundSize={"cover"}
                    backgroundColor={"white"}
                    description={'With ample storage and 5,000 lbs of towing capacity, Model X is built for maximum utility. Front doors open and close automatically, Falcon Wing rear doors allow for easier loading and a trailer hitch comes standard, so you can bring your gear with you wherever you go.'}/>

        </>
    );
};

export default PowerAndElectricity;