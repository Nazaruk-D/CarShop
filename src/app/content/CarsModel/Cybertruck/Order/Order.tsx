import React from 'react';
import s from "./Order.module.scss"
import cybertruckNeon from "./../../../../../common/assets/cybertruckNeon.png"
import cybertruckWhiteLogo from "./../../../../../common/assets/cybertruckWhiteLogo.png"
import CyberpunkButton from "../../../../../common/components/CyberpunkButton/CyberpunkButton";

const Order = () => {

    return (
        <div className={s.mainBlock} >
            <div className={s.orderBlock}>
                <div className={s.logo} style={{backgroundImage: `url(${cybertruckWhiteLogo})`}}></div>
                <CyberpunkButton title={"ORDER NOW"} color={"white"} secondColor={"black"} onClick={()=>{}}/>
            </div>
            <div className={s.imgBlock}>
                <div className={s.image} style={{backgroundImage: `url(${cybertruckNeon})`}}></div>
            </div>
        </div>
    );
};

export default Order;