import React from 'react';
import s from "./PresentationBlock.module.scss";
import {Element} from "react-scroll";
import {NavLink} from "react-router-dom";
import {routes} from "../../../app/routes/routes";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
const Fade = require("react-reveal/Fade")

type CarPropsType = {
    backgroundImage: string
    model: string
    conditions?: string
    children: React.ReactNode
    color?: string
}

const PresentationBlock: React.FC<CarPropsType> = ({model, conditions, backgroundImage, children, color}) => {
    const defaultConditions  = conditions ? conditions : ""
    const defaultColor  = color ? color : ""
    return (
        <Element name={model} className={s.carContainer} style={{backgroundImage: `url(${backgroundImage})`}} id={model}>
            <VideoPlayer link={backgroundImage} style={{width: "100%", height: "100%", objectFit: "cover"}}/>
            <div className={s.carBlock}>
                    <div className={s.titleBlock} style={{color}}>
                        <Fade bottom>
                            <h1 className={s.description}>{model}</h1>
                        </Fade>
                        <Fade bottom>
                            {renderConditionComponent(defaultConditions, defaultColor)}
                        </Fade>
                    </div>
                <div className={s.bottomBlock}>
                    {children}
                </div>
            </div>
        </Element>
    );
};

export default PresentationBlock;

const renderConditionComponent = (conditions: string, color: string) => {
    switch (conditions) {
        case 'Schedule a Demo Drive':
            if (color === 'black') {
                return (
                    <NavLink to={routes.drive} className={s.demoDriveBlack}>{conditions}</NavLink>
                );
            } else {
                return (
                    <NavLink to={routes.drive} className={s.demoDrive}>{conditions}</NavLink>
                );
            }
        case 'Schedule a Demo Drive Today':
            if (color === 'white') {
                return (
                    <NavLink to={routes.drive} className={s.demoDrive}>{conditions}</NavLink>
                );
            }
            break;
        case 'Schedule a Virtual Consultation':
            return (
                <NavLink to={routes.consultation} className={s.virtualConsultation}>{conditions}</NavLink>
            );
        default:
            if (
                conditions !== 'Schedule a Virtual Consultation' &&
                conditions !== 'Schedule a Demo Drive Today'
            ) {
                return (
                    <h3 className={s.conditions}>{conditions}</h3>
                );
            }
            break;
    }
};