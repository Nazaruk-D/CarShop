import React from 'react';
import s from './Interior.module.scss'
//@ts-ignore
import modelYInterior from '../../../../../common/assets/modelYInterior.jfif'
import wifiLogo from '../../../../../common/assets/wifiLogo.svg'
import teslaTopViewIcon from '../../../../../common/assets/teslaTopViewIcon.svg'
import Technologies from "../../../../../common/components/Technologies/Technologies";

const Interior = () => {
    return (
        <div className={s.mainContainer}>
            <div className={s.interiorContainer} style={{backgroundImage: `url(${modelYInterior})`}}>
                <div className={s.textContainer}>
                    <Technologies bottomText={'A touchscreen display designed to improve over time'}
                                  topText={'15 inch'}/>
                    <Technologies bottomText={'Over-the-air software updates introduce new features, functionality and performance'}
                                  image={wifiLogo}/>
                    <Technologies bottomText={'Rear, side and forward-facing cameras provide maximum visibility'}
                                  image={teslaTopViewIcon}/>
                </div>
            </div>
        </div>
    );
};

export default Interior;