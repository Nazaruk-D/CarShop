import React from 'react';
import s from './Button.module.scss'

type ButtonPropsType = {
    title: string
    backgroundColor: string
    color: string
    onClick: () => void
}

const Button: React.FC<ButtonPropsType> = ({title, color, onClick, backgroundColor}) => {

    const onClickHandler = () => {
        onClick()
    }

    return (
        <div>
            <button style={{backgroundColor, color}} onClick={onClickHandler} className={s.button}>{title}</button>
        </div>
    );
};

export default Button;