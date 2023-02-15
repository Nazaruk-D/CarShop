import React from 'react';
import s from './CarDesign.module.scss'
import Advantages from "../../commonComponents/Advantages/Advantages";
// @ts-ignore
import ModelSPerformanceHero from "../../../../../common/assets/ModelSExteriorHeroDesktopGlobal.jfif";

const CarDesign = () => {
    return (
        <div className={s.carDesignContainer}>
            <Advantages
                data={[]}
                backgroundImage={ModelSPerformanceHero}
                title={'Exterior'}
                subtitle={'Designed for Efficiency'}
                textColor={'white'}
                secondColor={'black'}
                description={'With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.'}/>
        </div>
    );
};

export default CarDesign;