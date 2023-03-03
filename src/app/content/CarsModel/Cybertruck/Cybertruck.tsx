import React from 'react';
import FirstBlock from "./FirstBlock/FirstBlock";
import Header from "../../../header/Header";
import Exoskeleton from "./Exoskeleton/Exoskeleton";
import CybertruckFeatures from "../commonComponents/CybertruckFeatures/CybertruckFeatures";
import cybertruckSkeleton from "../../../../common/assets/cybertruckSkeleton.jpg"
//@ts-ignore
import cybertruckVideo from "../../../../common/assets/video/cybertruckVideo.mp4"
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
            <CybertruckFeatures titleSize={'big'} backgroundImage={cybertruckVideo} title={'PERFORMANCE AND EFFICIENCY'} description={'Now entering a new class of strength, speed and versatility—only possible with an all-electric design. The powerful drivetrain and low center of gravity provides extraordinary traction control and torque—enabling acceleration from 0-60 mph in as little as 2.9 seconds and up to 500 miles of range.'}/>
        </div>
    );
};

export default Cybertruck;