import React from 'react';
import PresentationBlock from "../../../../../common/components/PresentationBlock/PresentationBlock";
import Characteristics from "../../../../../common/components/Characteristics/Characteristics";
import PrimaryButton from "../../../../../common/components/buttons/PrimaryButton/PrimaryButton";
import s from "./FirstBlock.module.scss"
import {routes} from "../../../../routes/routes";
import {useNavigate} from "react-router-dom";
import {useAppSelector} from "../../../../store/store";
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
    const navigate = useNavigate()
    const isLoggedIn = useAppSelector(s => s.auth.isLoggedIn)

    let route: string;
    switch (model) {
        case 'Model Y':
            route = routes.orderingModelY;
            break;
        case 'Model X':
            route = routes.orderingModelX;
            break;
        case 'Model S':
            route = routes.orderingModelS;
            break;
        case 'Model 3':
            route = routes.orderingModel3;
            break;
        default:
            route = routes.orderingModelY;
            break;
    }

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
                    <PrimaryButton title={'Order now'} color={'white'} secondColor={'black'} onClick={() => navigate(isLoggedIn ? route : routes.login)}/>
                </Fade>
            </div>
        </PresentationBlock>
    );
};

export default FirstBlock;