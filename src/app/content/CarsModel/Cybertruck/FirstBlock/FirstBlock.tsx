import React from 'react';
import s from "./FirstBlock.module.scss"
//@ts-ignore
import cybertruckHero from "./../../../../../common/assets/cybertruckHero.jfif"
import cybertruckLogo from "./../../../../../common/assets/cybertruckLogo.svg"
import CyberpunkButton from "../../../../../common/components/CyberpunkButton/CyberpunkButton";

const FirstBlock = () => {

    return (
        <div className={s.mainBlock} style={{backgroundImage: `url(${cybertruckHero})`}}>
            <div className={s.titleBlock}>
                <div className={s.logoContainer} style={{backgroundImage: `url(${cybertruckLogo})`}}></div>
                <span className={s.title}>BETTER UTILITY THAN A TRUCK WITH MORE PERFORMANCE THAN A SPORTS CAR</span>
            </div>
            <div className={s.buttonBlock}>
                <CyberpunkButton title={"ORDER NOW"} color={"white"} secondColor={"black"} onClick={()=>{}}/>
            </div>
        </div>
    );
};

export default FirstBlock;