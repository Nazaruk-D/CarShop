import React from 'react';
import Header from "../../../../header/Header";
import FirstBlock, {FirstBlockType} from "../../commonComponents/FirstBlock/FirstBlock";
// @ts-ignore
import model3Second from "../../../../../common/assets/model3Second.jfif";

const characteristicsData: FirstBlockType[] = [
    {
        topText: '3.1', bottomText: '0-60 mph*', measurement: 's'
    },
    {
        topText: '358', bottomText: 'Range (EPA est.)', measurement: 'mi'
    },
    {
        topText: 'AWD', bottomText: 'Dual Motor', measurement: ''
    },
]

const TopBlock = () => {
    return (
        <>
            <Header color={'white'}/>
            <FirstBlock characteristicsData={characteristicsData}
                        model={'Model 3'}
                        conditions={'Schedule a Demo Drive'}
                        backgroundImage={model3Second}
                        orderLink={'model3'}
            />
        </>
    );
};

export default TopBlock;