import React from 'react';
import s from './ScheduleSolar.module.scss'
import Header from "../../../header/Header";
import Footer from "../../CarsModel/commonComponents/Footer/Footer";

const ScheduleSolar = () => {
    return (
        <div className={s.mainContainer}>
            <Header/>

            {/*<Footer description={false}/>*/}
        </div>
    );
};

export default ScheduleSolar;