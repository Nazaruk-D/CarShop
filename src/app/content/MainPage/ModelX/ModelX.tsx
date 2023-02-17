import React from 'react';
// @ts-ignore
import modelX from '../../../../common/assets/modelX.jfif'
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";

import Button from "../../../../common/components/Button/Button";

const ModelX = () => {
    return (
        <PresentationBlock color={'black'} backgroundImage={modelX} model={'Model X'} conditions={'Schedule a Demo Drive'}>
            <Button title={'Custom Order'} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'}
                    onClick={() => {
                    }}/>
            <Button title={'View Inventory'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                    color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
            }}/>
        </PresentationBlock>
    );
};

export default ModelX;