import React from 'react';
import s from "./SmallRoundButton.module.scss";

type SmallRoundButtonPropsType = {
    onClick: () => void
    color?: string
    size?: string
    opacity?: number
}

const SmallRoundButton: React.FC<SmallRoundButtonPropsType> = ({onClick, color, opacity}) => {
    return <div className={s.smallRoundButton} onClick={onClick} style={{backgroundColor: color, opacity}}>.</div>
};

export default SmallRoundButton;