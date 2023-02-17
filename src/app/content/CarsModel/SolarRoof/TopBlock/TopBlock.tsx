import React from 'react';
import Header from "../../../../header/Header";
import FirstBlock, {FirstBlockType} from "../../commonComponents/FirstBlock/FirstBlock";
// @ts-ignore
import SolarRoofTop from "../../../../../common/assets/SolarRoofTop.jfif";

const characteristicsData: FirstBlockType[] = [
    {
        topText: 'Sun', bottomText: 'Beautiful Solar', measurement: ''
    },
    {
        topText: '25', bottomText: 'Tittle Warranty', measurement: '-Year'
    },
    {
        topText: '24/7', bottomText: 'Outage Protection', measurement: ''
    },
]

const TopBlock = () => {
    return (
        <>
            <Header color={'white'}/>
            <FirstBlock characteristicsData={characteristicsData}
                        model={'Solar Roof'}
                        conditions={'Schedule a Virtual Consultation'}
                        backgroundImage={SolarRoofTop}/>
        </>
    );
};

export default TopBlock;