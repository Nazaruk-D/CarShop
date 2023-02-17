import React from 'react';
import Safety from "../../commonComponents/Safety/Safety";
// @ts-ignore
import PlaidRangeWebDesktop8mb from "../../../../../common/assets/video/PlaidRangeWebDesktop8mb.mp4";
import Features, {DataPropsType} from "../../commonComponents/Features/Features";
// @ts-ignore
import ModelSSafetyHeroDesktopGlobal from "../../../../../common/assets/ModelSSafetyHeroDesktopGlobal.jfif";
import Autopilot from "../../commonComponents/Autopilot/Autopilot";
import {CharacteristicsPropsType} from "../../../../../common/components/Characteristics/Characteristics";
import map1 from "../../../../../common/assets/map1.jpg";
import map2 from "../../../../../common/assets/map2.jpg";
import map3 from "../../../../../common/assets/map3.jpg";
import map4 from "../../../../../common/assets/map4.jpg";
// @ts-ignore
import video1 from "../../../../../common/assets/video/0GSNWC_Model_S_Navigate_0.mp4-2000_OY92ST.mp4";
// @ts-ignore
import video2 from "../../../../../common/assets/video/A7I6LP_lane_change_0.mp4-2000_PYSUF4.mp4";
// @ts-ignore
import video3 from "../../../../../common/assets/video/ZZNM9S_summon_1.mp4-2000_OQKCDY.mp4";
// @ts-ignore
import video4 from "../../../../../common/assets/video/WM5XUG_parking.mp4-2000_EQUBJE.mp4";


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
            image: map1,
            interval: 4000
        },
        {
            title: 'Berkeley to Lake Tahoe',
            distance: '178 miles',
            image: map2,
            interval: 4000
        },
        {
            title: 'Manhattan to Boston',
            distance: '211 miles',
            image: map3,
            interval: 4000
        },
        {
            title: 'Fort Lauderdale to Orlando',
            distance: '195 miles',
            image: map4,
            interval: 4000
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
            image: video1,
            interval: 15000
        },
        {
            title: 'Auto Lane Change',
            description: 'Automatically change lanes while driving on the highway',
            image: video2,
            interval: 9000
        },
        {
            title: 'Summon',
            description: 'Automatically retrieve your car',
            image: video3,
            interval: 5000
        },
        {
            title: 'Autopark',
            description: 'Parallel and perpendicular parking with a single touch',
            image: video4,
            interval: 10000
        },
    ]
}


const SmartControl = () => {
    return (
        <>
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
        </>
    );
};

export default SmartControl;