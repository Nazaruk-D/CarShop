import React from 'react';
import s from './Interior.module.scss';
import Technologies from "../../../../../../common/components/Technologies/Technologies";
import TitleBlock from "../../../../../../common/components/TitleBlock/TitleBlock";
import wifiLogo from '../../../../../../common/assets/wifiLogo.svg';
import teslaTopViewIcon from '../../../../../../common/assets/teslaTopViewIcon.svg';
//@ts-ignore
import modelYInterior from '../../../../../../common/assets/modelYInterior.jfif';

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
            <TitleBlock title={'Built Around the Driver'}
                        subtitle={'Interior'}
                        description={'With an elevated seating position and low dash, the driver has a commanding view of the road ahead. The interior of Model Y is simple and clean, with a 15-inch touch screen, immersive sound system and an expansive all-glass roof that creates extra headroom and provides a seamless view of the sky.'}/>
        </div>
    );
};

export default Interior;