import React from 'react';
import Header from "../../../../header/Header";
import FirstBlock, {FirstBlockType} from "../../commonComponents/FirstBlock/FirstBlock";
// @ts-ignore
import modelYSecond from "../../../../../common/assets/modelYSecond.jfif";

const characteristicsData: FirstBlockType[] = [
    {
        topText: '76', bottomText: 'Cargo Space', measurement: 'cu ft'
    },
    {
        topText: '330', bottomText: 'Range (EPA est.)', measurement: 'mi'
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
                        model={'Model Y'}
                        conditions={'Schedule a Demo Drive'}
                        backgroundImage={modelYSecond}
                        orderLink={'modelY'}
            />
        </>
    );
};

export default TopBlock;