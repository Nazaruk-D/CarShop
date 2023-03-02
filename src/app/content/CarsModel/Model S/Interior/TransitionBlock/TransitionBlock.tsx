import React from 'react';
import s from './TransitionBlock.module.scss'
const Fade = require("react-reveal/Fade")


const TransitionBlock = () => {
    return (
        <div className={s.transitionContainer}>
            <Fade bottom>
                <div className={s.transitionBlock}>Interior of the Future</div>
            </Fade>
        </div>
);
};

export default TransitionBlock;