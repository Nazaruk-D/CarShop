import React from 'react';
// @ts-ignore
import modelS from '../../../../common/assets/modelS.jfif'
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";
import Button from "../../../../common/components/Button/Button";

const ModelS = () => {
    return (
        <PresentationBlock color={'black'} backgroundImage={modelS} model={'Model S'} conditions={'Schedule a Demo Drive'}>
            <Button title={'Custom Order'} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'}
                    onClick={() => {
                    }}/>
            <Button title={'View Inventory'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                    color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
            }}/>
        </PresentationBlock>
    );
};

export default ModelS;