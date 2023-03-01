import React from 'react';
import s from "./Orders.module.scss"

const Orders = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.titleBlock}>
                <h1 className={s.title}>Order History</h1>
            </div>
            <div className={s.contentBlock}>
                <div className={s.itemBlock}>
                    <div className={s.imageContainer}></div>
                    <div className={s.descriptionBlock}>
                        <span className={s.description}>View all shop transactions</span>
                        <span className={s.descriptionButton}>View</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Orders;