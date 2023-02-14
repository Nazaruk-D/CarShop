import React from 'react';
import s from './Salon.module.scss'
import SalonContainer from "./SalonContainer/SalonContainer";
// @ts-ignore
import MSInteriorDesktop from '../../../../../../common/assets/MSInteriorDesktop.jfif'
// @ts-ignore
import MSInteriorGridDesktop from '../../../../../../common/assets/MSInteriorGridDesktop.jfif'
// @ts-ignore
import video from '../../../../../../common/assets/video/audio.mp4'

const Salon = () => {
    return (
        <div className={s.salonContainer}>
            <div className={s.salonBlock}>
                <SalonContainer title={"Stay Connected"}
                                description={'Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.'}
                                backgroundImage={MSInteriorDesktop}/>
                <SalonContainer title={"Immersive Sound"}
                                description={'A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.'}
                                videoLink={video}
                                position={"row-reverse"}
                                start={"flex-start"}/>
                <SalonContainer title={"Room for Everything"}
                                description={'With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.'}
                                backgroundImage={MSInteriorGridDesktop}/>
            </div>
        </div>
    );
};

export default Salon;