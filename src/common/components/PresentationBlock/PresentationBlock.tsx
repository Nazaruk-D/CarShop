import React from 'react';
import s from "./PresentationBlock.module.scss";
import {Element} from "react-scroll";
import {NavLink} from "react-router-dom";
import {routes} from "../../../app/routes/routes";
const Fade = require("react-reveal/Fade")

type CarPropsType = {
    backgroundImage: string
    model: string
    conditions?: string
    children: React.ReactNode
    color?: string
}

const PresentationBlock: React.FC<CarPropsType> = ({model, conditions, backgroundImage, children, color}) => {
    return (
        <Element name={model} className={s.carContainer} style={{backgroundImage: `url(${backgroundImage})`}}
                 id={model}>
            <div className={s.carBlock}>
                <div className={s.titleBlock} style={{color}}>
                    <Fade bottom>
                        <h1 className={s.description}>{model}</h1>
                    </Fade>
                    {conditions === 'Schedule a Demo Drive'
                        && color === 'black'
                        && <Fade bottom><NavLink to={routes.drive} className={s.demoDriveBlack}>{conditions}</NavLink></Fade>}
                    {conditions === 'Schedule a Demo Drive'
                        && color !== 'black'
                        && <Fade bottom><NavLink to={routes.drive} className={s.demoDrive}>{conditions}</NavLink></Fade>}
                    {conditions !== 'Schedule a Demo Drive'
                        && conditions !== 'Schedule a Virtual Consultation'
                        && <Fade bottom><h3 className={s.conditions}>{conditions}</h3></Fade>}
                    {conditions === 'Schedule a Virtual Consultation'
                        && <Fade bottom><h3 className={s.virtualConsultation}>{conditions}</h3></Fade>}
                </div>
                <div className={s.bottomBlock}>
                    {children}
                </div>
            </div>
        </Element>
    );
};

export default PresentationBlock;