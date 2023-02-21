import React from 'react';
import s from "./SmallRoundButton.module.scss";

type SmallRoundButtonPropsType = {
    onClick: () => void
    color?: string
    size?: string
}

const SmallRoundButton: React.FC<SmallRoundButtonPropsType> = ({onClick, color}) => {
    return <div className={s.smallRoundButton} onClick={onClick} style={{backgroundColor: color}}>.</div>
};

export default SmallRoundButton;