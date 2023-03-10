import React from 'react';
import s from './SolarOrder.module.scss'
import PrimaryButton from "../../../../../common/components/buttons/PrimaryButton/PrimaryButton";
import Button from "../../../../../common/components/buttons/Button/Button";

export type SolarOrderPropsType = {
    title: string
}

const Order: React.FC<SolarOrderPropsType> = ({title}) => {
    return (
        <div className={s.mainContainer}>
            <div className={s.titleBlock}>
                {title}
            </div>
            <div className={s.descriptionBlock}>
                Order now or talk to a Tesla Advisor if you have any questions
            </div>
            <div className={s.buttonsBlock}>
                <PrimaryButton title={'Order Now'} color={'white'} secondColor={'black'} onClick={() => {}}/>
                <Button title={'Schedule a Virtual Consultation'} backgroundColor={'rgba(244, 244, 244, 0.15)'}
                        color={'rgba(255, 255, 255, 0.8)'} onClick={() => {
                }}/>
                <div className={s.updatesButton}>Get Updates</div>
            </div>

        </div>
    );
};

export default Order;