import React, {useContext, useEffect} from 'react';
import s from "./Order.module.scss"
import DetailsButton from "../../../../../common/components/buttons/DetailsButton/DetailsButton";
import {useInView} from "react-intersection-observer";
import {Context, ContextType} from "../../Context";
import {getFutureDate} from "../../../../../utils/getFutureDate";
import {OrderType} from "../../../../../types/OrderType";
import OrderConfirmation from "../../OrderСonfirmation/OrderСonfirmation";
import {useModal} from "../../../../../hooks/useModal";

type OrderPropsType = {
    title: string
    active: OrderType
}

const Order: React.FC<OrderPropsType> = ({title, active}) => {
    const [context, setContext] = useContext<ContextType>(Context);
    const {ref, inView, entry} = useInView({
        threshold: 0,
    });
    const {orderConfirmationModal, toggleOrderConfirmationModal} = useModal()

    useEffect(() => {
        if (inView) {
            setContext("Order")
        }
    }, [inView])

    const deliveryData = getFutureDate(2)

    return (
        <>
            <div className={s.orderContainer} ref={ref}>
                <h2 className={s.title}>Order your {title}</h2>
                <p>Est. Delivery: {deliveryData}</p>
                <DetailsButton title={"Continue to Payment"} onClick={() => toggleOrderConfirmationModal()}/>
            </div>
            {orderConfirmationModal && <OrderConfirmation setModalActive={toggleOrderConfirmationModal} hide={toggleOrderConfirmationModal}/>}
        </>
    );
};

export default Order;