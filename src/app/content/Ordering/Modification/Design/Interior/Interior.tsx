import React from 'react';
import s from "./Interior.module.scss"
import white from "../../../../../../common/assets/orders/common/interior_color/Interior_White.avif";
import black from "../../../../../../common/assets/orders/common/interior_color/Interior_Black.avif";
import DetailsButton from "../../../../../../common/components/buttons/DetailsButton/DetailsButton";

const Interior = () => {
    return (
        <div className={s.paintContainer}>
            <h2 className={s.title}>Paint</h2>
            <div className={s.colorBlock}>
                <img src={white} alt="white" className={s.color}/>
                <img src={black} alt="black" className={s.color}/>
            </div>
            <div className={s.priceBlock}>
                <p className={s.colorName}>Midnight Silver Metallic</p>
                <p className={s.colorPrice}>$1,000</p>
            </div>
            <DetailsButton title={"Feature Details"}/>
        </div>
    );
};

export default Interior;