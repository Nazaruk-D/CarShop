import React from 'react';
import s from './SpecsButton.module.scss'

type ButtonPropsType = {
    title: string
    color: boolean
    onClick: () => void
}

const SpecsButton: React.FC<ButtonPropsType> = ({title, onClick, color}) => {
    const isActive = color ? {color: 'rgba(255,255,255,1)', border:'2px solid rgba(255,255,255,1)'} : {}

    const onClickHandler = () => {
        onClick();
    }

    return (
        <>
            <button style={isActive}
                    onClick={onClickHandler}
                    className={s.button}>{title}</button>
        </>
    );
};

export default SpecsButton;