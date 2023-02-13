import React from 'react';
import s from './Interior.module.scss'
// @ts-ignore
import displayImage from './../../../../../common/assets/DesktopLHD.jfif'

const Interior = () => {
    return (
        <div className={s.displayContainer} style={{backgroundImage: `url(${displayImage})`}}></div>
    );
};

export default Interior;