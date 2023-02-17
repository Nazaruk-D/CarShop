import React from 'react';
// @ts-ignore
import accessories from '../../../../common/assets/Accessories.jfif'
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";
import Button from "../../../../common/components/Button/Button";

const Accessories = () => {
    return (
        <PresentationBlock color={'black'} backgroundImage={accessories} model={'Accessories'}>
            <Button title={'Shop Now'} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'}
                    onClick={() => {
                    }}/>
        </PresentationBlock>
    );
};

export default Accessories;