import React from 'react';
import s from './ScheduleButton.module.scss'
import {useAppDispatch} from "../../../app/store/store";
import {ModelType, setActiveModel} from "../../../features/profile/profile-reducer";

type ScheduleButtonPropsType = {
    title: ModelType
    color: string
    border?: string
    onClick: () => void
}

const ScheduleButton: React.FC<ScheduleButtonPropsType> = ({title, color, onClick, border}) => {

    return (
        <>
            <button style={{color, border}} onClick={() => onClick()} className={s.button}>{title}</button>
        </>
    );
};

export default ScheduleButton;