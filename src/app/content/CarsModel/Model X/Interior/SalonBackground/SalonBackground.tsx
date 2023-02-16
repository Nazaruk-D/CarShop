import React from 'react';
import s from "./SalonBackground.module.scss";
// @ts-ignore
import displayImage from '../../../../../../common/assets/DesktopLHD.jfif'

const SalonBackground = () => {
    return <div className={s.displayContainer} style={{backgroundImage: `url(${displayImage})`}}></div>

};

export default SalonBackground;