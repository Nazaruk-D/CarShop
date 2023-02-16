import React from 'react';
import Safety from "../../commonComponents/Safety/Safety";
import Advantages from "../../commonComponents/Advantages/Advantages";
import {CharacteristicsPropsType} from "../../../../../common/components/Characteristics/Characteristics";
//@ts-ignore
import model3Safety from "../../../../../common/assets/model3Safety.jfif";
//@ts-ignore
import model3Red from "../../../../../common/assets/model3Red.jfif";
//@ts-ignore
import model3Blue from "../../../../../common/assets/model3Blue.jfif";

const performanceAdvantagesData: CharacteristicsPropsType[] = [
    {
        topText: '3.1',
        measurement: 's',
        bottomText: 'Quickest acceleration—from zero to 60 mph* in as little as 3.1 seconds',
    },
    {
        topText: '162',
        measurement: 'mph',
        bottomText: 'Improved handling and aerodynamics allow for a top speed of 162 mph',
    },
    {
        topText: 'Dual Motor',
        measurement: '',
        bottomText: 'Dual Motor All-Wheel Drive instantly controls traction and torque, in all weather conditions',
    },
]
const awdAdvantagesData: CharacteristicsPropsType[] = [
    {
        topText: '2',
        measurement: '',
        bottomText: 'Independent motors digitally control torque to the front and rear wheels',
    },
    {
        topText: '10',
        measurement: 'ms',
        bottomText: 'Dual motors respond to changing conditions in as little as 10 milliseconds',
    },
    {
        topText: 'AWD',
        measurement: '',
        bottomText: 'Unparalleled traction and control, in all weather conditions',
    },
]

const SafetyAndAdvantages = () => {
    return (
        <>
            <Safety backgroundImage={model3Safety}
                    backgroundColor={'white'}
                    subtitle={'Safety'}
                    title={'Built for Safety'}
                    description={'Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards. 5-Star Rating Model Y achieved NHTSA 5-star safety ratings in every category and subcategory. Top Safety Pick Model Y received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.'}/>
            <Advantages data={performanceAdvantagesData}
                        backgroundImage={model3Red}
                        title={'Quickest Acceleration'}
                        subtitle={'Performance'}
                        description={'Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds. Chat with a Tesla Advisor to learn more about Model 3 or schedule a demo drive today.'}/>
            <Advantages data={awdAdvantagesData}
                        backgroundImage={model3Blue}
                        title={'Dual Motor'}
                        subtitle={'All-Wheel Drive'}
                        description={'Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.'}/>
        </>
    );
};

export default SafetyAndAdvantages;