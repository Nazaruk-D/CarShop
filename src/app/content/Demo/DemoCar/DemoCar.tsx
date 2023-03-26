import React, {useState} from 'react';
import s from './DemoCar.module.scss'
import Header from "../../../header/Header";
import ChoiceBlock from "./ChoiceBlock/ChoiceBlock";
import ContactBlock from "./ContactBlock/ContactBlock";
import Footer from "../../CarsModel/commonComponents/Footer/Footer";

const DemoCar = () => {

    return (
        <div className={s.mainContainer}>
            <Header/>
            <ChoiceBlock/>
            <ContactBlock/>
            <Footer description={false}/>
        </div>
    );
};

export default DemoCar;