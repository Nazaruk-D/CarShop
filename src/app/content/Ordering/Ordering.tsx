import React from 'react';
import s from "./Ordering.module.scss"

const Ordering = () => {
    return (
        <div className={s.orderingContainer}>
            <div className={s.imageBlock}></div>
            <div className={s.orderBlock}></div>
        </div>
    );
};

export default Ordering;