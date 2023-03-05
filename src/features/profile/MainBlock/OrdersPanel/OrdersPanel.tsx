import React from 'react';
import s from "./OrdersPanel.module.scss"

const OrdersPanel = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Orders List</h1>
            </div>
            <div className={s.contentBlock}>

            </div>
        </div>
    );
};

export default OrdersPanel;