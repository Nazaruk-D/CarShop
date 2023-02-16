import React from 'react';
import Header from "../../../../header/Header";
import FirstBlock, {FirstBlockType} from "../../commonComponents/FirstBlock/FirstBlock";
// @ts-ignore
import modelX from "../../../../../common/assets/Model-X-Main-Hero-Desktop-LHD.jfif";

const characteristicsData: FirstBlockType[] = [
    {
        topText: '333', measurement: 'mi', bottomText: 'Range (EPA est.)'
    },
    {
        topText: '2.5', measurement: 's', bottomText: '0-60 mph*'
    },
    {
        topText: '9.9', measurement: 's', bottomText: '1/4 Mile'
    },
    {
        topText: '1,020', measurement: 'hp', bottomText: 'Peak Power'
    },
]

const TopBlock = () => {
    return (
        <>
            <Header color={'black'}/>
            <FirstBlock characteristicsData={characteristicsData}
                        model={'Model X'}
                        conditions={'Plaid'}
                        backgroundImage={modelX}/>
        </>
    );
};

export default TopBlock;