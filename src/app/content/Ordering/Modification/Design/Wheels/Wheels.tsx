import React from 'react';
import s from "./Wheels.module.scss"
import wheels18aero from "../../../../../../common/assets/orders/common/wheels/option-wheels-18-aero.avif";
import wheels19sport from "../../../../../../common/assets/orders/common/wheels/option-wheels-19-sport.avif";
import DetailsButton from "../../../../../../common/components/buttons/DetailsButton/DetailsButton";

const Wheels = () => {
    return (
        <div className={s.wheelsContainer}>
            <h2 className={s.title}>Wheels</h2>
            <div className={s.wheelBlock}>
                <img src={wheels18aero} alt="white" className={s.common}/>
                <img src={wheels19sport} alt="silver" className={s.common}/>
            </div>
            <div className={s.priceBlock}>
                <p className={s.wheelName}>Midnight Silver Metallic</p>
                <p className={s.wheelPrice}>$1,000</p>
            </div>
            <p className={s.text}>All-Season Tires</p>
            <p className={s.text}>Range (EPA est.) : 272mi</p>
            <DetailsButton title={"Learn more"}/>
        </div>
    );
};

export default Wheels;