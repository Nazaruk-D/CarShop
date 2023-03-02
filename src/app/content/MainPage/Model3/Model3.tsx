import React from 'react';
// @ts-ignore
import model3 from "../../../../common/assets/model3.jfif";
import Button from "../../../../common/components/Button/Button";
import PresentationBlock from "../../../../common/components/PresentationBlock/PresentationBlock";
const Fade = require("react-reveal/Fade")

const Model3 = () => {
    return (
        <PresentationBlock color={'black'} backgroundImage={model3} model={'Model 3'}
                           conditions={'Leasing starting at $349/mo'}>
            <Fade left>
                <Button title={'Custom Order'} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'}
                        onClick={() => {
                        }}/>
            </Fade>
            <Fade right>
                <Button title={'Demo Drive'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                        color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
                }}/>
            </Fade>
        </PresentationBlock>
    );
};

export default Model3;