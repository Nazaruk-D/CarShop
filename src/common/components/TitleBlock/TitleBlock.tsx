import React from 'react';
import s from './TitleBlock.module.scss'
import PrimaryButton from "../buttons/PrimaryButton/PrimaryButton";
import Button from "../buttons/Button/Button";

const Fade = require("react-reveal/Fade")


type TitlePropsType = {
    title: string
    subtitle: string
    description: string
    carImage?: string
    color?: 'white' | 'black'
    secondColor?: 'white' | 'black'
}

const TitleBlock: React.FC<TitlePropsType> = ({title, subtitle, description, carImage, color, secondColor}) => {

    const borderClr = color ? color : 'black'
    const secondClr = secondColor ? secondColor : 'white'

    return (
        <div className={s.textBlock}>
            <div className={s.textContainer}>
                <Fade bottom cascade>
                    <div className={s.titleBlock}>
                        <h3 className={s.subtitle}>{subtitle}</h3>
                        <h2 className={s.title}>{title}</h2>
                        <div className={s.buttonsBlock}>
                            <PrimaryButton title={'Order now'} color={borderClr} secondColor={secondClr}
                                           onClick={() => {
                                           }}/>
                            <Button title={'View Inventory'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                                    color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
                            }}/>
                        </div>
                    </div>
                    <div className={s.descriptionBlock}>
                    <span className={s.description}>
                        {description}
                    </span>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default TitleBlock;
