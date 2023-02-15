import React from 'react';
import s from './Order.module.scss'
import PrimaryButton from "../../../../../common/components/PrimaryButton/PrimaryButton";
import Button from "../../../../../common/components/Button/Button";

export type OrderPropsType = {
    carName: "Model Y" | "Model 3" | "Model S" | "Model X"
    backgroundImage: string
}

const Order: React.FC<OrderPropsType> = ({carName, backgroundImage}) => {
    return (
        <div className={s.mainContainer}>
            <div className={s.orderContainer}>
                <div className={s.titleBlock}>
                    <div className={s.title}>Order {carName}</div>
                    <div className={s.buttonsBlock}>
                        <PrimaryButton title={'Order Now'} color={'black'} secondColor={'white'} onClick={() => {}}/>
                        <Button title={'View Inventory'} backgroundColor={'rgba(244, 244, 244, 0.65)'}
                                color={'rgba(23, 26, 32, 0.8)'} onClick={() => {
                        }}/>
                    </div>
                </div>
            </div>
            <div className={s.imageContainer} >
                <div className={s.image} style={{backgroundImage: `url(${backgroundImage})`}}></div>
            </div>

        </div>
    );
};

export default Order;