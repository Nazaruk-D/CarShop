import React from 'react';
import solarRoof from '../../../../common/assets/solarRoof.webp'
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";
import Button from "../../../../common/components/Button/Button";

const SolarRoof = () => {
    return (
        <PresentationBlock color={'black'} backgroundImage={solarRoof} model={'Solar Roof'} conditions={'Produce Clean Energy From Your Roof'}>
            <Button title={'Order Now'} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'}
                    onClick={() => {
                    }}/>
            <Button title={'Learn More'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                    color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
            }}/>
        </PresentationBlock>
    );
};

export default SolarRoof;