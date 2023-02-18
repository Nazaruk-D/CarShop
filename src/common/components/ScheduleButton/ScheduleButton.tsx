import React from 'react';
import s from './ScheduleButton.module.scss'

type ScheduleButtonPropsType = {
    title: string
    color: string
    border?: string
    onClick: () => void
}

const ScheduleButton: React.FC<ScheduleButtonPropsType> = ({title, color, onClick, border}) => {

    const onClickHandler = () => {
        onClick()
    }

    return (
        <>
            <button style={{color, border}} onClick={onClickHandler} className={s.button}>{title}</button>
        </>
    );
};

export default ScheduleButton;