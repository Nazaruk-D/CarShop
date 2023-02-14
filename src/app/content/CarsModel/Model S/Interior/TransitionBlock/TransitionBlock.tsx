import React from 'react';
import s from './TransitionBlock.module.scss'

const TransitionBlock = () => {
    return (
        <div className={s.transitionContainer}>
            <div className={s.transitionBlock}>Interior of the Future</div>
        </div>
    );
};

export default TransitionBlock;