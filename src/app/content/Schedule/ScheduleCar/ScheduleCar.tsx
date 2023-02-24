import React from 'react';
import s from './ScheduleCar.module.scss'
import Header from "../../../header/Header";
import ChoiceBlock from "./ChoiceBlock/ChoiceBlock";
import ContactBlock from "./ContactBlock/ContactBlock";

const ScheduleCar = () => {
    return (
        <div className={s.mainContainer}>
            <Header/>
            <ChoiceBlock/>
            <ContactBlock/>
        </div>
    );
};

export default ScheduleCar;