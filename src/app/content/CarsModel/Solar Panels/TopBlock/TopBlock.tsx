import React from 'react';
import Header from "../../../../header/Header";
import FirstBlock, {FirstBlockType} from "../../commonComponents/FirstBlock/FirstBlock";
// @ts-ignore
import HeroD from "../../../../../common/assets/25HeroD.jfif";

const characteristicsData: FirstBlockType[] = [
    {
        topText: 'sun', bottomText: 'Convert Sunlight to Energy', measurement: ''
    },
    {
        topText: '$', bottomText: 'Guaranteed Lowest Price for Solar', measurement: ''
    },
    {
        topText: '24/7', bottomText: 'Energy Monitoring', measurement: ''
    },
]

const TopBlock = () => {
    return (
        <>
            <Header/>
            <FirstBlock characteristicsData={characteristicsData}
                        model={'Solar for Existing Roofs'}
                        conditions={'Schedule a Virtual Consultation'}
                        backgroundImage={HeroD}
                        orderLink=''
            />
        </>
    );
};

export default TopBlock;