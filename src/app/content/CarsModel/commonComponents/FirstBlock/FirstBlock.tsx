import React, {useEffect, useState} from 'react';
import PresentationBlock from "../../../../../common/components/PresentationBlock/PresentationBlock";
import Characteristics from "../../../../../common/components/Characteristics/Characteristics";
import PrimaryButton from "../../../../../common/components/PrimaryButton/PrimaryButton";
import VideoPlayer from "../../../../../common/components/VideoPlayer/VideoPlayer";
import s from "./FirstBlock.module.scss"
// @ts-ignore
import loading from "../../../../../common/assets/video/loading.mp4";

const Fade = require("react-reveal/Fade")

export type FirstBlockPropsType = {
    model: 'Model Y' | 'Model 3' | 'Model X' | 'Model S' | 'Solar for Existing Roofs' | 'Solar Roof'
    characteristicsData: FirstBlockType[]
    conditions: string
    backgroundImage: string
}

export type FirstBlockType = {
    topText: string
    measurement: string
    bottomText: string
}

const FirstBlock: React.FC<FirstBlockPropsType> = ({model, characteristicsData, conditions, backgroundImage}) => {
    return (
        <PresentationBlock backgroundImage={backgroundImage} model={model} conditions={conditions}>
            <div className={s.haracteristics}>
                {characteristicsData.map((c, i) => (
                    <div style={{marginRight: 20}}>
                        <Characteristics key={i}
                                         topText={c.topText}
                                         measurement={c.measurement}
                                         bottomText={c.bottomText}/>
                    </div>
                ))
                }
            </div>
            <div className={s.button}>
                <Fade bottom>
                    <PrimaryButton title={'Order now'} color={'white'} secondColor={'black'} onClick={()=>{}}/>
                </Fade>
            </div>
        </PresentationBlock>
    );
};

export default FirstBlock;