import React from 'react';
import s from "./Exoskeleton.module.scss"
import cybertruckSide from "../../../../../common/assets/cybertruckSide.jpg"

const Exoskeleton = () => {

    return (
        <div className={s.mainBlock}>
            <div className={s.imageContainer}>
                <div className={s.image} style={{backgroundImage: `url(${cybertruckSide})`}}></div>
            </div>
            <div className={s.titleContainer}>
                <h1 className={s.title}>EXOSKELETON</h1>
                <span className={s.description}>Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass.</span>
            </div>
        </div>
    );
};

export default Exoskeleton;