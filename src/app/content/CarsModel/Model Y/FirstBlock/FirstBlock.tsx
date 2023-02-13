import React from 'react';
import PresentationBlock from "../../../../../common/components/PresentationBlock/PresentationBlock";
// @ts-ignore
import modelYSecond from "../../../../../common/assets/modelYSecond.jfif";
import Characteristics from "../../../../../common/components/Characteristics/Characteristics";
import PrimaryButton from "../../../../../common/components/PrimaryButton/PrimaryButton";

const FirstBlock = () => {
    return (
        <PresentationBlock backgroundImage={modelYSecond} model={'Model Y'} conditions={'Performance'}>
            <div style={{marginRight: 20}}>
                <Characteristics topText={'76'}  measurement={'cu ft'} bottomText={'Cargo Space'}/>
            </div>
            <div style={{marginRight: 20}}>
                <Characteristics topText={'330'}  measurement={'mi'} bottomText={'Range (EPA est.)'}/>
            </div>
            <div style={{marginRight: 20}}>
                <Characteristics topText={'AWD'}  measurement={''} bottomText={'Dual Motor'}/>
            </div>
            <PrimaryButton title={'Order now'} color={'white'} secondColor={'black'} onClick={()=>{}}/>
        </PresentationBlock>
    );
};

export default FirstBlock;