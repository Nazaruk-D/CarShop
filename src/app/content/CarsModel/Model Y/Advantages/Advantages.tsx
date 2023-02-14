import React from 'react';
import s from './Advantages.module.scss'
//@ts-ignore
import modelYRed from '../../../../../common/assets/modelYRed.jfif'
import Characteristics from "../../../../../common/components/Characteristics/Characteristics";

const Advantages = () => {
    return (
        <div className={s.advantagesContainer} style={{backgroundImage: `url(${modelYRed})`}}>
            <div className={s.characteristicsContainer}>
                <div style={{marginRight: 20}}>
                    <Characteristics topText={'2'}  measurement={''} bottomText={'Independent motors digitally control torque to the front and rear wheels'}/>
                </div>
                <div style={{marginRight: 20}}>
                    <Characteristics topText={'3.5 s'}  measurement={''} bottomText={'Quickest acceleration—from zero to 60 mph* in as little as 3.5 seconds'}/>
                </div>
                <div style={{marginRight: 20}}>
                    <Characteristics topText={'AWD'}  measurement={''} bottomText={'Capable in rain, snow, mud and off-road with superior traction control'}/>
                </div>
            </div>
        </div>
    );
};

export default Advantages;