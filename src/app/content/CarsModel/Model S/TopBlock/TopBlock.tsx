import React from 'react';
import Header from "../../../../header/Header";
import FirstBlock, {FirstBlockType} from "../../commonComponents/FirstBlock/FirstBlock";
// @ts-ignore
import modelS from "../../../../../common/assets/modelSBlack.jfif";

const characteristicsData: FirstBlockType[] = [
    {
        topText: '396', measurement: 'mi', bottomText: 'Range (EPA est.)'
    },
    {
        topText: '1.99', measurement: 's', bottomText: '0-60 mph*'
    },
    {
        topText: '200', measurement: 'mph', bottomText: 'Top speed†'
    },
    {
        topText: '1,020', measurement: 'hp', bottomText: 'Range (EPA est.)'
    },
]

const TopBlock = () => {
    return (
        <>
            <Header color={'white'}/>
            <FirstBlock characteristicsData={characteristicsData}
                        model={'Model S'}
                        conditions={'Plaid'}
                        backgroundImage={modelS}/>
        </>
    );
};

export default TopBlock;