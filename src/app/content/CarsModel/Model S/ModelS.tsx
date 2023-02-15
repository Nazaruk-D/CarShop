import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import Interior from "./Interior/Interior";
import Advantages from "../commonComponents/Advantages/Advantages";
import {CharacteristicsPropsType} from "../../../../common/components/Characteristics/Characteristics";
// @ts-ignore
import ModelSPerformanceHero from '../../../../common/assets/ModelSPerformanceHero.jfif'
// @ts-ignore
import ModelSSafetyHeroDesktopGlobal from '../../../../common/assets/ModelSSafetyHeroDesktopGlobal.jfif'
// @ts-ignore
import PlaidRangeWebDesktop8mb from '../../../../common/assets/video/PlaidRangeWebDesktop8mb.mp4'
import map1 from "../../../../common/assets/map1.jpg";
import map2 from "../../../../common/assets/map2.jpg";
import map3 from "../../../../common/assets/map3.jpg";
import map4 from "../../../../common/assets/map4.jpg";
// @ts-ignore
import video1 from "../../../../common/assets/video/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4";
// @ts-ignore
import video2 from "../../../../common/assets/video/A7I6LP_lane_change_0.mp4-2000_PYSUF4.mp4";
// @ts-ignore
import video3 from "../../../../common/assets/video/ZZNM9S_summon_1.mp4-2000_OQKCDY.mp4";
// @ts-ignore
import video4 from "../../../../common/assets/video/WM5XUG_parking.mp4-2000_EQUBJE.mp4";
import ElectricPowerTrain from "./ElectricPowerTrain/ElectricPowerTrain";
import CarDesign from "./CarDesign/CarDesign";
import Safety from "../commonComponents/Safety/Safety";
import Autopilot from "../commonComponents/Autopilot/Autopilot";
import Features, {DataPropsType} from "../commonComponents/Features/Features";


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


const travelData: DataPropsType = {
    title: 'Freedom to Travel',
    description: 'Enter a destination on your touchscreen and Trip Planner will automatically calculate your route with Superchargers along the way.',
    infoBlock: [
        {
            title: 'San Francisco to Los Angeles',
            distance: '383 miles',
            image: map1
        },
        {
            title: 'Berkeley to Lake Tahoe',
            distance: '178 miles',
            image: map2
        },
        {
            title: 'Manhattan to Boston',
            distance: '211 miles',
            image: map3
        },
        {
            title: 'Fort Lauderdale to Orlando',
            distance: '195 miles',
            image: map4
        },
    ]
}

const featuresData: DataPropsType = {
    title: 'Features',
    description: 'Enhanced Autopilot and Full Self-Driving capability introduce additional features and improve existing functionality to make your car more capable over time, including:',
    infoBlock: [
        {
            title: 'Navigate on Autopilot',
            description: 'Active guidance from on-ramp to off-ramp',
            image: video1
        },
        {
            title: 'Auto Lane Change',
            description: 'Automatically change lanes while driving on the highway',
            image: video2
        },
        {
            title: 'Summon',
            description: 'Automatically retrieve your car',
            image: video3
        },
        {
            title: 'Autopark',
            description: 'Parallel and perpendicular parking with a single touch',
            image: video4
        },
    ]
}

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
            <Features data={travelData}/>
            <Safety
                subtitle={'Safety'}
                title={'High Impact Protection'}
                backgroundImage={ModelSSafetyHeroDesktopGlobal}
                backgroundColor={'white'}
                flexDirection={'row-reverse'}
                description={'Model S is built from the ground up as an electric vehicle, with a high-strength architecture and floor-mounted battery pack for incredible occupant protection and low rollover risk. Every new Model S includes Tesla’s latest active safety features, such as Automatic Emergency Braking, at no extra cost.'}/>
            <Autopilot/>
            <Features data={featuresData}/>
        </div>
    );
};

export default ModelS;