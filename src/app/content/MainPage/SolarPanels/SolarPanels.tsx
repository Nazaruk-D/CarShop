import React from 'react';
// @ts-ignore
import solarPanels from '../../../../common/assets/solarPanels.jfif'
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";
import Button from "../../../../common/components/Button/Button";

const SolarPanels = () => {
    return (
        <PresentationBlock backgroundImage={solarPanels} model={'Solar Panels'} conditions={'Lowest Cost Solar Panels in America'}>
            <Button title={'Order Now'} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'}
                    onClick={() => {
                    }}/>
            <Button title={'Learn More'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                    color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
            }}/>
        </PresentationBlock>
    );
};

export default SolarPanels;