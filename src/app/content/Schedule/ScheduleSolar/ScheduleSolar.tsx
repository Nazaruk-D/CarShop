import React from 'react';
import s from './ScheduleSolar.module.scss'
import Header from "../../../header/Header";
import Footer from "../../CarsModel/commonComponents/Footer/Footer";
import ImageBlock from "./ImageBlock/ImageBlock";
import MainBlock from "./MainBlock/MainBlock";

const ScheduleSolar = () => {
    return (
        <div className={s.mainContainer}>
            <Header/>
            <ImageBlock/>
            <MainBlock/>
            <Footer description={false}/>
        </div>
    );
};

export default ScheduleSolar;