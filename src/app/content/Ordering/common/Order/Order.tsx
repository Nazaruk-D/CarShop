import React, {useContext, useEffect} from 'react';
import s from "./Order.module.scss"
import DetailsButton from "../../../../../common/components/buttons/DetailsButton/DetailsButton";
import {useInView} from "react-intersection-observer";
import {Context, ContextType} from "../../Context";
import {useAppDispatch} from "../../../../store/store";
import {OrderType, setOrderState} from "../../order-reducer";
import {getFutureDate} from "../../../../../utils/getFutureDate";

type OrderPropsType = {
    title: string
    active: OrderType
}

const Order: React.FC<OrderPropsType> = ({title, active}) => {
    const dispatch = useAppDispatch()
    const [context, setContext] = useContext<ContextType>(Context);
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    const onClickHandler = () => {
        dispatch(setOrderState(active))
    }

    useEffect(()=>{
        if(inView) {
            setContext("Order")
        }
    },[inView])

    const deliveryData = getFutureDate(2)

    return (
        <div className={s.orderContainer} ref={ref}>
            <h2 className={s.title}>Order your {title}</h2>
            <p>Est. Delivery: {deliveryData}</p>
            <DetailsButton title={"Continue to Payment"} onClick={onClickHandler}/>
        </div>
    );
};

export default Order;