import React from 'react';
import Header from "../../../header/Header";
import FirstBlock from "./FirstBlock/FirstBlock";
import Comfort from "./Comfort/Comfort";
import Autopilot from "./Autopilot/Autopilot";
import Interior from "./Interior/Interior";
import Advantages from "../commonComponents/Advantages/Advantages";
import Specs, {SpecsType} from "../commonComponents/Specs/Specs";
import Safety from "../commonComponents/Safety/Safety";
import safetyImage from '../../../../common/assets/safetyImage.png'
import {CharacteristicsPropsType} from "../../../../common/components/Characteristics/Characteristics";
//@ts-ignore
import modelYRed from '../../../../common/assets/modelYRed.jfif'
// @ts-ignore
import modelYRangeVideo from "../../../../common/assets/video/modelYRangeVideo.mp4";
// @ts-ignore
import modelYBlack from '../../../../common/assets/modelYBlack.jfif'

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
        topText: '330', measurement: 'mi', bottomText: 'Go anywhere with up to 405 miles of estimated range on a single charge',
    },
    {
        topText: '15', measurement: 'min', bottomText: 'Recharge up to 162 miles in 15 minutes at Supercharger locations',
    },
    {
        topText: '40,000', measurement: '+', bottomText: 'Superchargers placed along well-traveled routes around the world',
    },
]
const performanceSpecsData: SpecsType[] = [
    {
        topText: 'Battery', bottomText: 'Long Range',
    },
    {
        topText: 'Weight', bottomText: '4,398 lbs',
    },
    {
        topText: '*Acceleration', bottomText: '3.5 s 0-60 mph with rollout subtracted',
    },
    {
        topText: 'Max Cargo Volume', bottomText: '76 cu ft',
    },
    {
        topText: 'Range', bottomText: '303 miles (EPA est.)',
    },
    {
        topText: 'Top Speed', bottomText: '155 mph',
    },
    {
        topText: 'Drive', bottomText: 'Dual Motor All-Wheel Drive',
    },
    {
        topText: 'Displays', bottomText: '15" Center Touchscreen',
    },
    {
        topText: 'Seating', bottomText: 'Up to 5',
    },
    {
        topText: 'Supercharging Max/Payment Type', bottomText: '250 kW Max; Pay Per Use',
    },
    {
        topText: 'Wheels', bottomText: '21"',
    },
    {
        topText: 'Warranty', bottomText: 'Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first',
    },
]
const longRangeSpecsData: SpecsType[] = [
    {
        topText: 'Battery', bottomText: 'Long Range',
    },
    {
        topText: 'Weight', bottomText: '4,363 lbs',
    },
    {
        topText: '*Acceleration', bottomText: '4.8 s 0-60 mph',
    },
    {
        topText: 'Max Cargo Volume', bottomText: '76 cu ft',
    },
    {
        topText: 'Range', bottomText: '330 miles (EPA est.)',
    },
    {
        topText: 'Top Speed', bottomText: '135 mph',
    },
    {
        topText: 'Drive', bottomText: 'Dual Motor All-Wheel Drive',
    },
    {
        topText: 'Displays', bottomText: '15" Center Touchscreen',
    },
    {
        topText: 'Seating', bottomText: 'Up to 7',
    },
    {
        topText: 'Supercharging Max/Payment Type', bottomText: '250 kW Max; Pay Per Use',
    },
    {
        topText: 'Wheels', bottomText: '19" or 20"',
    },
    {
        topText: 'Warranty', bottomText: 'Basic Vehicle - 4 years or 50,000 mi, whichever comes first Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first',
    },
]

const ModelY = () => {
    return (
        <div>
            <Header/>
            <FirstBlock/>
            <Safety backgroundImage={safetyImage}
                    subtitle={'Safety'}
                    title={'Designed for Safety'}
                    description={'Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards. 5-Star Rating Model Y achieved NHTSA 5-star safety ratings in every category and subcategory. Top Safety Pick Model Y received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.'}/>
            <Comfort/>
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
            <Autopilot/>
            <Interior/>
            <Specs title={'Model Y'} firstSpecsData={performanceSpecsData} secondSpecsData={longRangeSpecsData} backgroundImage={modelYBlack}/>
        </div>
    );
};

export default ModelY;