import React from 'react';
import s from "./Car.module.scss";
import Button from "../../../common/components/Button/Button";
import {Element} from "react-scroll";


type CarPropsType = {
    backgroundImage: string
    model: string
    conditions?: string
    firstButtonName: string
    secondButtonName: string
}

const Car: React.FC<CarPropsType> = ({model, conditions, backgroundImage, secondButtonName, firstButtonName}) => {
    return (
        <Element name={model} className={s.carContainer} style={{backgroundImage: `url(${backgroundImage})`}} id={model}>
                <div className={s.carBlock}>
                    <div className={s.titleBlock}>
                        <h1 className={s.description}>{model}</h1>
                        <h3 className={s.conditions}>{conditions}</h3>
                    </div>
                    <div className={s.buttonBlock}>
                        <Button title={firstButtonName} backgroundColor={'rgba(23, 26, 32, 0.8)'} color={'white'}
                                onClick={() => {
                                }}/>
                        <Button title={secondButtonName} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                                color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
                        }}/>
                    </div>
                </div>
        </Element>
    );
};

export default Car;