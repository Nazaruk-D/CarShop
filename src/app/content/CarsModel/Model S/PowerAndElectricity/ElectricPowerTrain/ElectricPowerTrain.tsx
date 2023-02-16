import React, {useEffect, useState} from 'react';
import s from './ElectricPowerTrain.module.scss'
// @ts-ignore
import firstImage from '../../../../../../common/assets/ModelSDualMotorPowertrain-CarouselDesktop.jfif'
// @ts-ignore
import secondImage from '../../../../../../common/assets/ModelSPlaidTriMotorPowertrainCarouselDesktop.jfif'
import Characteristics from "../../../../../../common/components/Characteristics/Characteristics";

const ElectricPowerTrain = () => {
    const [isFirstActive, setIsFirstActive] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setIsFirstActive(!isFirstActive)
        }, 6000)
        return () => clearTimeout(timer);
    }, [isFirstActive])

    return (
        <div className={s.ElectricContainer}>
            <div className={s.ElectricBlock}>
                <div className={s.text}>
                    <h2 className={s.title}>Electric Powertrain</h2>
                    <span className={s.description}>
                        Model S platforms unite powertrain and battery technologies for unrivaled performance, range
                        and efficiency. New module and pack thermal architecture allows faster charging and gives you
                        more power and endurance in all conditions.
                    </span>
                </div>
                <div className={s.image}>
                    <div className={s.imageBlock}
                         style={{backgroundImage: `url(${isFirstActive ? firstImage : secondImage})`}}></div>
                </div>
                <div className={s.info}>
                    <div className={s.firstContainer} style={{opacity: isFirstActive ? 1 : 0.5}} onClick={() => {setIsFirstActive(true)}}>
                        <div className={s.firstBlock}>
                            <div className={s.text}>
                                <h4 className={s.title}>Model S</h4>
                                <span className={s.description}>Dual Motor All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.</span>
                            </div>
                            <div className={s.characteristics}>
                                <Characteristics topText={'3.1'} measurement={'s'} bottomText={'0-60 mph'} color={'black'}/>
                                <Characteristics topText={'405'} measurement={'mi'} bottomText={'Range (EPA est.)'} color={'black'}/>
                                <Characteristics topText={'670'} measurement={'hp'} bottomText={'Peak Power'} color={'black'}/>
                            </div>
                        </div>
                    </div>
                    <div className={s.secondContainer} style={{opacity: !isFirstActive ? 1 : 0.5}} onClick={() => {setIsFirstActive(false)}}>
                        <div className={s.secondBlock}>
                            <div className={s.text}>
                                <h4 className={s.title}>Model S Plaid</h4>
                                <span className={s.description}>Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.</span>
                            </div>
                            <div className={s.characteristics}>
                                <Characteristics topText={'1.99'} measurement={'s*'} bottomText={'0-60 mph'} color={'black'}/>
                                <Characteristics topText={'396'} measurement={'mi'} bottomText={'Range (EPA est.)'} color={'black'}/>
                                <Characteristics topText={'1020'} measurement={'hp'} bottomText={'Peak Power'} color={'black'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectricPowerTrain;