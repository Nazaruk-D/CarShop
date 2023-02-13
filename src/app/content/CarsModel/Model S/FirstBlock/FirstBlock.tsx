import React from 'react';
import PresentationBlock from "../../../../../common/components/PresentationBlock/PresentationBlock";
// @ts-ignore
import modelS from "../../../../../common/assets/modelSBlack.jfif";
import Characteristics from "../../../../../common/components/Characteristics/Characteristics";
import PrimaryButton from "../../../../../common/components/PrimaryButton/PrimaryButton";

const FirstBlock = () => {
    return (
        <PresentationBlock backgroundImage={modelS} model={'Model S'} conditions={'Plaid'}>
            <div style={{marginRight: 20}}>
                <Characteristics topText={'396'}  measurement={'mi'} bottomText={'Range (EPA est.)'}/>
            </div>
            <div style={{marginRight: 20}}>
                <Characteristics topText={'1.99'}  measurement={'s'} bottomText={'0-60 mph*'}/>
            </div>
            <div style={{marginRight: 20}}>
                <Characteristics topText={'200'}  measurement={'mph'} bottomText={'Top Speed†'}/>
            </div>
            <div style={{marginRight: 20}}>
                <Characteristics topText={'1,020'}  measurement={'hp'} bottomText={'Range (EPA est.)'}/>
            </div>
            <PrimaryButton title={'add'} onClick={()=>{}}/>
        </PresentationBlock>
    );
};

export default FirstBlock;