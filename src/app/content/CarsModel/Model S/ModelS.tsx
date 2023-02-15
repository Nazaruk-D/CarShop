import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import Interior from "./Interior/Interior";
import Advantages from "../commonComponents/Advantages/Advantages";
import {CharacteristicsPropsType} from "../../../../common/components/Characteristics/Characteristics";
// @ts-ignore
import ModelSPerformanceHero from '../../../../common/assets/ModelSPerformanceHero.jfif'
// @ts-ignore
import PlaidRangeWebDesktop8mb from '../../../../common/assets/video/PlaidRangeWebDesktop8mb.mp4'
import ElectricPowerTrain from "./ElectricPowerTrain/ElectricPowerTrain";
import CarDesign from "./CarDesign/CarDesign";
import Safety from "../commonComponents/Safety/Safety";


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

const characteristicsData: CharacteristicsPropsType[] = [
    {
        topText: '405', measurement: 'mi', bottomText: 'Go anywhere with up to 405 miles of estimated range on a single charge',
    },
    {
        topText: '15', measurement: 'min', bottomText: 'Recharge up to 200 miles in 15 minutes at Supercharger locations',
    },
    {
        topText: '40,000', measurement: '+', bottomText: 'Superchargers placed along popular routes',
    },
]

const ModelS = () => {
    return (
        <div>
            <Header/>
            <FirstBlock/>
            <Interior/>
            <Advantages data={advantagesData} backgroundImage={ModelSPerformanceHero} title={'Plaid'} subtitle={'Beyond Ludicrous'} description={'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.'}/>
            <ElectricPowerTrain/>
            <CarDesign/>
            <Safety
                subtitle={'Range'}
                title={'Go Anywhere'}
                backgroundImage={PlaidRangeWebDesktop8mb}
                characteristicsData={characteristicsData}
                description={'With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.'}/>

        </div>
    );
};

export default ModelS;