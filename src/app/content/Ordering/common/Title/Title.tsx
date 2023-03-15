import React, {useContext} from 'react';
import s from "./Title.module.scss"
import {useInView} from "react-intersection-observer";
import {Context, ContextType} from "../../Context";

type TitlePropType = {
    title: string
    date: string
}

const Title: React.FC<TitlePropType> = ({title, date}) => {
    const [context, setContext] = useContext<ContextType>(Context);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    if(inView) {
        setContext("Title")
    }
    return (
        <div className={s.titleContainer} id={title} ref={ref}>
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