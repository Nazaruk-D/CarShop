import React from 'react';
import s from './Autopilot.module.scss'
//@ts-ignore
import autopilotImage from '../../../../../common/assets/autopilotImage.jfif'
import cameraLens from '../../../../../common/assets/cameraLens.png'
import TitleBlock from "../../../../../common/components/TitleBlock/TitleBlock";

const Autopilot = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.autopilotContainer} style={{backgroundImage: `url(${autopilotImage})`}}>
                <div className={s.textContainer}>
                    <div className={s.textBlock}>
                        <div className={s.topText}>
                            360°
                        </div>
                        <div className={s.bottomText}>
                            Rear, side and forward-facing cameras provide maximum visibility
                        </div>
                    </div>
                    <div className={s.textBlock}>
                        <div className={s.topText}>
                            250 m
                        </div>
                        <div className={s.bottomText}>
                            Powerful visual processing at up to 250 meters of range
                        </div>
                    </div>
                    <div className={s.textBlock}>
                        <div className={s.topText}>
                            <div style={{backgroundImage: `url(${cameraLens})`}} className={s.icon}></div>
                        </div>
                        <div className={s.bottomText}>
                            Rear, side and forward-facing cameras provide maximum visibility
                        </div>
                    </div>
                </div>
            </div>
            <TitleBlock title={'Future of Driving'} subtitle={'Autopilot'}
                        description={'Autopilot\'s advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.'}/>
        </div>

    );
};

export default Autopilot;