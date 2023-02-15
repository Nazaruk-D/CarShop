import React from 'react';
import s from './Autopilot.module.scss';
import TitleBlock from "../../../../../common/components/TitleBlock/TitleBlock";
import Technologies from "../../../../../common/components/Technologies/Technologies";
//@ts-ignore
import autopilotImage from '../../../../../common/assets/autopilotImage.jfif';
import cameraLens from '../../../../../common/assets/cameraLens.png';

const Autopilot = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.autopilotContainer} style={{backgroundImage: `url(${autopilotImage})`}}>
                <div className={s.textContainer}>
                    <Technologies bottomText={'Rear, side and forward-facing cameras provide maximum visibility'}
                                  topText={'360°'}/>
                    <Technologies bottomText={'Powerful visual processing at up to 250 meters of range'}
                                  topText={'250 m'}/>
                    <Technologies bottomText={'Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking'}
                                  image={cameraLens}/>
                </div>
            </div>
            <TitleBlock title={'Future of Driving'}
                        subtitle={'Autopilot'}
                        description={'Autopilot\'s advanced safety and convenience features are designed to assist you with the most burdensome parts of driving.'}/>
        </div>
    );
};

export default Autopilot;