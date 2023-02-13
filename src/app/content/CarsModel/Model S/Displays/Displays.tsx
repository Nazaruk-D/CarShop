import React from 'react';
import s from './Displays.module.scss'

const Displays = () => {
    return (
        <div className={s.displaysContainer}>
            <div className={s.videoBlock}>
                <div className={s.video}>
                   123
                </div>
            </div>
            <div className={s.descriptionBlock}>
                <div className={s.description}>
                    123
                </div>
            </div>
        </div>
    );
};

export default Displays;