import React from 'react';
import s from "./Title.module.scss"

type TitlePropType = {
    title: string
    date: string
}

const Title: React.FC<TitlePropType> = ({title, date}) => {
    return (
        <div className={s.titleContainer}>
            <h1 className={s.title}>
                {title}
            </h1>
            <p className={s.deliveryDate}>
                Est. Delivery: {date}
            </p>
        </div>
    );
};

export default Title;