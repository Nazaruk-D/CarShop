import React from 'react';
import s from "./Title.module.scss"
import {Element} from "react-scroll";

type TitlePropType = {
    title: string
    date: string
}

const Title: React.FC<TitlePropType> = ({title, date}) => {
    return (
        <Element name={title} className={s.titleContainer} id={title}>
        {/*<div className={s.titleContainer} id={title}>*/}
            <h1 className={s.title}>
                {title}
            </h1>
            <p className={s.deliveryDate}>
                Est. Delivery: {date}
            </p>
        {/*</div>*/}
        // </Element>
    );
};

export default Title;