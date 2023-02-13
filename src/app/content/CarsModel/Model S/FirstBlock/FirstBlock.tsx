import React from 'react';
import PresentationBlock from "../../../../../common/components/PresentationBlock/PresentationBlock";
// @ts-ignore
import modelS from "../../../../../common/assets/modelS.jfif";
import Button from "../../../../../common/components/Button/Button";
import Characteristics from "../../../../../common/components/Characteristics/Characteristics";

const FirstBlock = () => {
    return (
        <PresentationBlock backgroundImage={modelS} model={'Model S'} conditions={'Plaid'}>
            <div style={{marginRight: 20}}>
                <Characteristics topText={'396'}  measurement={'mi'} bottomText={'Range (EPA est.)'}/>
            </div>
            <div style={{marginRight: 20}}>
                <Characteristics topText={'396'}  measurement={'mi'} bottomText={'Range (EPA est.)'}/>
            </div>
            <div style={{marginRight: 20}}>
                <Characteristics topText={'396'}  measurement={'mi'} bottomText={'Range (EPA est.)'}/>
            </div>
            <div style={{marginRight: 20}}>
                <Characteristics topText={'396'}  measurement={'mi'} bottomText={'Range (EPA est.)'}/>
            </div>
            <Button title={"New button"} backgroundColor={'rgba(0, 0, 0, 0)'} color={'white'} onClick={()=>{}}/>
        </PresentationBlock>
    );
};

export default FirstBlock;