import React, {useContext} from 'react';
import s from "./Order.module.scss"
import DetailsButton from "../../../../../../../common/components/buttons/DetailsButton/DetailsButton";
import {useInView} from "react-intersection-observer";
import {Context, ContextType} from "../../../Model3Order";
import {useAppDispatch} from "../../../../../../store/store";
import {OrderType, setOrderState} from "../../../../order-reducer";

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

    if(inView) {
        setContext("Order")
    }

    const onClickHandler = () => {
        dispatch(setOrderState(active))
    }

    return (
        <div className={s.orderContainer} ref={ref}>
            <h2 className={s.title}>Order your {title}</h2>
            <p>Est. Delivery: Mar 2023</p>
            <DetailsButton title={"Continue to Payment"} onClick={onClickHandler}/>
        </div>
    );
};

export default Order;