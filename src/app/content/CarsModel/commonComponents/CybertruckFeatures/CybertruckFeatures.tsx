import React from 'react';
import s from "./CybertruckFeatures.module.scss"
import VideoPlayer from "../../../../../common/components/VideoPlayer/VideoPlayer";

export type CybertruckFeaturesPropsType = {
    backgroundImage: string
    title: string
    description: string
    titleSize?: 'big' | 'default'
}

const CybertruckFeatures: React.FC<CybertruckFeaturesPropsType> = ({backgroundImage, title, description, titleSize}) => {

    return (
        <div className={s.mainBlock} >
            <div className={s.imageContainer}>
                <div className={s.image} style={{backgroundImage: `url(${backgroundImage})`}}>
                    <VideoPlayer link={backgroundImage} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                </div>
            </div>
            <div className={s.titleContainer}>
                <h2 className={titleSize === 'big' ? s.bigTitle : s.title}>{title}</h2>
                <span className={s.description}>{description}</span>
            </div>
        </div>
    );
};

export default CybertruckFeatures;