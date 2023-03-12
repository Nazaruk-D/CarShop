import React from 'react';
import s from "./Order.module.scss"
import DetailsButton from "../../../../../../common/components/buttons/DetailsButton/DetailsButton";

type OrderPropsType = {
    title: string
}

const Order: React.FC<OrderPropsType> = ({title}) => {
    return (
        <div className={s.orderContainer}>
            <h2 className={s.title}>{title}</h2>
            <p>Est. Delivery: Mar 2023</p>
            <DetailsButton title={"Continue to Payment"}/>
        </div>
    );
};

export default Order;