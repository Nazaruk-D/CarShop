import React from 'react';
import s from "./PresentationBlock.module.scss";
import {Element} from "react-scroll";


type CarPropsType = {
    backgroundImage: string
    model: string
    conditions?: string
    children: React.ReactNode
}

const PresentationBlock: React.FC<CarPropsType> = ({model, conditions, backgroundImage,children}) => {
    return (
        <Element name={model} className={s.carContainer} style={{backgroundImage: `url(${backgroundImage})`}} id={model}>
                <div className={s.carBlock}>
                    <div className={s.titleBlock}>
                        <h1 className={s.description}>{model}</h1>
                        <h3 className={s.conditions}>{conditions}</h3>
                    </div>
                    <div className={s.bottomBlock}>
                        {children}
                    </div>
                </div>
        </Element>
    );
};

export default PresentationBlock;