import React from 'react';
import s from './ScheduleCar.module.scss'
import Header from "../../../header/Header";
import ChoiceBlock from "./ChoiceBlock/ChoiceBlock";
import ContactBlock from "./ContactBlock/ContactBlock";
import Footer from "../../CarsModel/commonComponents/Footer/Footer";

const ScheduleCar = () => {
    return (
        <div className={s.mainContainer}>
            <Header/>
            <ChoiceBlock/>
            <ContactBlock/>
            <Footer description={false}/>
        </div>
    );
};

export default ScheduleCar;