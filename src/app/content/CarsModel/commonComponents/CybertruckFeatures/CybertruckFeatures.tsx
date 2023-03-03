import React from 'react';
import s from "./CybertruckFeatures.module.scss"

export type CybertruckFeaturesPropsType = {
    backgroundImage: string
    title: string
    description: string
}

const CybertruckFeatures: React.FC<CybertruckFeaturesPropsType> = ({backgroundImage, title, description}) => {

    return (
        <div className={s.mainBlock} >
            <div className={s.imageContainer}>
                <div className={s.image} style={{backgroundImage: `url(${backgroundImage})`}}></div>
            </div>
            <div className={s.titleContainer}>
                <h2 className={s.title}>{title}</h2>
                <span className={s.description}>{description}</span>
            </div>
        </div>
    );
};

export default CybertruckFeatures;