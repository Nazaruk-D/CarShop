import React from 'react';
import s from './ScheduleButton.module.scss'
import {useAppDispatch} from "../../../../app/store/store";
import {ModelType, setActiveModel} from "../../../../features/profile/profile-reducer";

type ScheduleButtonPropsType = {
    title: string
    color: string
    border?: string
    width?: string
    price?: string
    justifyContent?: string
    onClick: () => void
}

const ScheduleButton: React.FC<ScheduleButtonPropsType> = ({title, color, onClick, border, width, price, justifyContent}) => {

    return (
        <>
            <button style={{color, border, width, justifyContent}} onClick={() => onClick()} className={s.button}><p>{title}</p> <p>${price}</p></button>
        </>
    );
};

export default ScheduleButton;