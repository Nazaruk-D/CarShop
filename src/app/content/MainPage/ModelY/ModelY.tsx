import React from 'react';
// @ts-ignore
import modelY from '../../../../common/assets/modelY.jfif'
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";
import Button from "../../../../common/components/Button/Button";

const ModelY = () => {
    return (
        <PresentationBlock backgroundImage={modelY} model={'Model Y'} conditions={'Leasing starting at $349/mo'}>
            <Button title={'Custom Order'} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'}
                    onClick={() => {
                    }}/>
            <Button title={'Demo Drive'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                    color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
            }}/>
        </PresentationBlock>
    );
};

export default ModelY;