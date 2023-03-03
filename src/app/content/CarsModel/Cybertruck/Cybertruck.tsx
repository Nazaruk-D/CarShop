import React from 'react';
import FirstBlock from "./FirstBlock/FirstBlock";
import Header from "../../../header/Header";
import Exoskeleton from "./Exoskeleton/Exoskeleton";
import CybertruckFeatures from "../commonComponents/CybertruckFeatures/CybertruckFeatures";
import cybertruckSkeleton from "../../../../common/assets/cybertruckSkeleton.jpg"
import cybertruckRoad from "../../../../common/assets/cybertruckRoad.jpg"
import CybertruckCarousel from "./CybertruckCarousel/CybertruckCarousel";


const Cybertruck = () => {

    return (
        <div>
            <Header/>
            <FirstBlock/>
            <Exoskeleton/>
            <CybertruckFeatures backgroundImage={cybertruckSkeleton} title={'ULTRA-HARD 30X COLD-ROLLED STAINLESS STEEL'} description={'If there was something better, we’d use it. Help eliminate dents, damage and long-term corrosion with a smooth monochrome exoskeleton that puts the shell on the outside of the car and provides you and your passengers maximum protection.'}/>
            <CybertruckFeatures backgroundImage={cybertruckRoad} title={'TESLA ARMOR GLASS'} description={'Ultra-strong glass and polymer-layered composite can absorb and redirect impact force for improved performance and damage tolerance.'}/>
            <CybertruckCarousel/>
        </div>
    );
};

export default Cybertruck;