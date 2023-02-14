import React from 'react';
import s from './RoundButton.module.scss'

type RoundButtonPropsType = {
    onClick: () => void
    color?: string
}

const RoundButton: React.FC<RoundButtonPropsType> = ({color, onClick}) => {
    return <button className={s.roundButton} onClick={onClick} style={{backgroundColor: color}}></button>
};

export default RoundButton;