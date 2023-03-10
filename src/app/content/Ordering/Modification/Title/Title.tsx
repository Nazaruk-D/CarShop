import React from 'react';
import s from "./Title.module.scss"

const Title = () => {
    return (
        <div className={s.titleContainer}>
            <h1 className={s.title}>
                Model 3
            </h1>
            <p className={s.deliveryDate}>
                Est. Delivery: Mar 2023
            </p>
        </div>
    );
};

export default Title;