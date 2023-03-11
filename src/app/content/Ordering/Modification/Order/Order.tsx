import React from 'react';
import s from "./Order.module.scss"
import DetailsButton from "../../../../../common/components/buttons/DetailsButton/DetailsButton";

const Order = () => {
    return (
        <div className={s.orderContainer}>
            <h2 className={s.title}>Order Your Model 3</h2>
            <p>Est. Delivery: Mar 2023</p>
            <DetailsButton title={"Continue to Payment"}/>
        </div>
    );
};

export default Order;