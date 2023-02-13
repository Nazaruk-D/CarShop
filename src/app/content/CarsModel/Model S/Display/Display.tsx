import React from 'react';
import s from './Display.module.scss'
// @ts-ignore
import displayImage from './../../../../../common/assets/DesktopLHD.jfif'

const Display = () => {
    return (
        <div className={s.displayContainer} style={{backgroundImage: `url(${displayImage})`}}></div>
    );
};

export default Display;