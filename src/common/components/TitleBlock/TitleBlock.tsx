import React from 'react';
import s from './TitleBlock.module.scss'
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import Button from "../Button/Button";

type TitlePropsType = {
    title: string
    subtitle: string
    description: string
    carImage?: string
}

const TitleBlock: React.FC<TitlePropsType> = ({title, subtitle, description,carImage}) => {
    return (
       <div className={s.textBlock}>
           <div className={s.textContainer}>
               <div className={s.titleBlock}>
                   <h3 className={s.subtitle}>{subtitle}</h3>
                   <h2 className={s.title}>{title}</h2>
                   <div className={s.buttonsBlock}>
                       <PrimaryButton title={'Order now'} color={'black'} secondColor={'white'} onClick={() => {}}/>
                       <Button title={'View Inventory'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                               color={'rgba(23, 26, 32, 0.8)'} onClick={() => {}}/>
                   </div>
               </div>
               <div className={s.descriptionBlock}>
                    <span className={s.description}>
                        {description}
                    </span>
               </div>
           </div>
       </div>
    );
};

export default TitleBlock;
