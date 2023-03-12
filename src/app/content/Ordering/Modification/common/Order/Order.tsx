import React, {useContext} from 'react';
import s from "./Order.module.scss"
import DetailsButton from "../../../../../../common/components/buttons/DetailsButton/DetailsButton";
import {Context, ContextType} from "../../../Ordering";
import {useInView} from "react-intersection-observer";

type OrderPropsType = {
    title: string
}

const Order: React.FC<OrderPropsType> = ({title}) => {
    const [context, setContext] = useContext<ContextType>(Context);
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    if(inView) {
        setContext("Order")
    }
    return (
        <div className={s.orderContainer} ref={ref}>
            <h2 className={s.title}>{title}</h2>
            <p>Est. Delivery: Mar 2023</p>
            <DetailsButton title={"Continue to Payment"}/>
        </div>
    );
};

export default Order;