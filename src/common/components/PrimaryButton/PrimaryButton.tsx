import React from 'react';
import s from './PrimaryButton.module.scss'

type ButtonPropsType = {
    title: string
    // backgroundColor: string
    // color: string
    onClick: () => void
}

const PrimaryButton: React.FC<ButtonPropsType> = ({title, onClick}) => {

    const onClickHandler = () => {
        onClick()
    }

    return (
        <>
            <button onClick={onClickHandler} className={s.button}>{title}</button>
        </>
    );
};

export default PrimaryButton;