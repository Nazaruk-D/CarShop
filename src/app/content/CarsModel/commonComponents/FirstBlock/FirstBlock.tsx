import React from 'react';
import PresentationBlock from "../../../../../common/components/PresentationBlock/PresentationBlock";
import Characteristics from "../../../../../common/components/Characteristics/Characteristics";
import PrimaryButton from "../../../../../common/components/buttons/PrimaryButton/PrimaryButton";
import s from "./FirstBlock.module.scss"
import {routes} from "../../../../routes/routes";
import {useNavigate} from "react-router-dom";
const Fade = require("react-reveal/Fade")

export type FirstBlockPropsType = {
    model: 'Model Y' | 'Model 3' | 'Model X' | 'Model S' | 'Solar for Existing Roofs' | 'Solar Roof'
    orderLink: 'model3' | 'modelY' | 'modelX' | 'modelS' | ''
    characteristicsData: FirstBlockType[]
    conditions: string
    backgroundImage: string
}

export type FirstBlockType = {
    topText: string
    measurement: string
    bottomText: string
}

const FirstBlock: React.FC<FirstBlockPropsType> = ({model, orderLink, characteristicsData, conditions, backgroundImage}) => {
    const navigate = useNavigate()
    const link = orderLink !== '' ? `/CarShop/ordering/${orderLink}` : `/CarShop`
    return (
        <PresentationBlock backgroundImage={backgroundImage} model={model} conditions={conditions}>
            <div className={s.characteristics}>
                {characteristicsData.map((c, i) => (
                    <div style={{marginRight: 20}} key={i}>
                        <Characteristics topText={c.topText}
                                         measurement={c.measurement}
                                         bottomText={c.bottomText}/>
                    </div>
                ))
                }
            </div>
            <div className={s.button}>
                <Fade bottom>
                    <PrimaryButton title={'Order now'} color={'white'} secondColor={'black'} onClick={() => navigate(link)}/>
                </Fade>
            </div>
        </PresentationBlock>
    );
};

export default FirstBlock;