import React from 'react';
import PresentationBlock from "../../../../../common/components/PresentationBlock/PresentationBlock";
import Characteristics from "../../../../../common/components/Characteristics/Characteristics";
import PrimaryButton from "../../../../../common/components/PrimaryButton/PrimaryButton";

export type FirstBlockPropsType = {
    model: 'Model Y' | 'Model 3' | 'Model X' | 'Model S'
    characteristicsData: FirstBlockType[]
    conditions: string
    backgroundImage: string
}

export type FirstBlockType = {
    topText: string
    measurement: string
    bottomText: string
}

const FirstBlock: React.FC<FirstBlockPropsType> = ({model, characteristicsData, conditions , backgroundImage}) => {
    return (
        <PresentationBlock backgroundImage={backgroundImage} model={model} conditions={conditions}>
            {characteristicsData.map((c, i) => (
                <div style={{marginRight: 20}}>
                    <Characteristics key={i}
                                     topText={c.topText}
                                     measurement={c.measurement}
                                     bottomText={c.bottomText}/>
                </div>))
            }
            <PrimaryButton title={'Order now'} color={'white'} secondColor={'black'} onClick={()=>{}}/>
        </PresentationBlock>
    );
};

export default FirstBlock;