import React from 'react';
import TransitionBlock from "./TransitionBlock/TransitionBlock";
import Displays from "./Displays/Displays";
import SalonBackground from "./SalonBackground/SalonBackground";
import CollageBlock, {DataProps} from "../../commonComponents/CollageBlock/CollageBlock";
// @ts-ignore
import MSInteriorDesktop from '../../../../../common/assets/MSInteriorDesktop.jfif'
// @ts-ignore
import MSInteriorGridDesktop from '../../../../../common/assets/MSInteriorGridDesktop.jfif'
// @ts-ignore
import video from '../../../../../common/assets/video/audio.mp4'

const data: DataProps[] = [
    {
        backgroundImage: MSInteriorDesktop,
        title: 'Stay Connected',
        description: 'Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.',
        imagePosition: "row",
        flex: "flex-end"
    },
    {
        videoLink: video,
        title: 'Immersive Sound',
        description: 'A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.',
        imagePosition: "row-reverse",
        flex: "flex-start"
    },
    {
        backgroundImage: MSInteriorGridDesktop,
        title: 'Room for Everything',
        description: 'With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too.',
        imagePosition: "row",
        flex: "flex-end"
    },
]

const Interior = () => {
    return (
        <>
            <TransitionBlock/>
            <SalonBackground/>
            <Displays/>
            <CollageBlock data={data}/>
        </>
    );
};

export default Interior;