import React from 'react';
import s from './ScheduleCar.module.scss'
import Header from "../../../header/Header";
import ChoiceBlock from "./ChoiceBlock/ChoiceBlock";

const ScheduleCar = () => {
    return (
        <div className={s.mainContainer}>
            <Header/>
            <ChoiceBlock/>
        </div>
    );
};

export default ScheduleCar;