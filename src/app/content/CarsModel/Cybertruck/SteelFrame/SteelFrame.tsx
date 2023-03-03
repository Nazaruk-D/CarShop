import React from 'react';
import s from "./SteelFrame.module.scss"
import cybertruckSkeleton from "../../../../../common/assets/cybertruckSkeleton.jpg"

const SteelFrame = () => {

    return (
        <div className={s.mainBlock} >
            <div className={s.imageContainer}>
                <div className={s.image} style={{backgroundImage: `url(${cybertruckSkeleton})`}}></div>
            </div>
            <div className={s.titleContainer}>
                <h2 className={s.title}>ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL</h2>
                <span className={s.description}>If there was something better, we’d use it. Help eliminate dents, damage and long-term corrosion with a smooth monochrome exoskeleton that puts the shell on the outside of the car and provides you and your passengers maximum protection.</span>
            </div>
        </div>
    );
};

export default SteelFrame;