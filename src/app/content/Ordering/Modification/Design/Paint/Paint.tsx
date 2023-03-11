import React from 'react';
import s from "./Paint.module.scss"
import white from "../../../../../../common/assets/orders/common/color/Paint_White.avif"
import silver from "../../../../../../common/assets/orders/common/color/Paint_Silver.avif"
import blue from "../../../../../../common/assets/orders/common/color/Paint_Blue.avif"
import black from "../../../../../../common/assets/orders/common/color/Paint_Black.avif"
import red from "../../../../../../common/assets/orders/common/color/Paint_Red.avif"

const Paint = () => {
    return (
        <div className={s.paintContainer}>
            <h2 className={s.title}>Paint</h2>
            <div className={s.colorBlock}>
                <img src={white} alt="white" className={s.color}/>
                <img src={silver} alt="silver" className={s.color}/>
                <img src={blue} alt="blue" className={s.color}/>
                <img src={black} alt="black" className={s.color}/>
                <img src={red} alt="red" className={s.color}/>
            </div>
            <div className={s.priceBlock}>
                <p className={s.colorName}>Midnight Silver Metallic</p>
                <p className={s.colorPrice}>$1,000</p>
            </div>
        </div>
    );
};

export default Paint;